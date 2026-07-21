/// <reference types="node" />

import test from 'node:test';
import assert from 'node:assert/strict';
import { Worker } from 'node:worker_threads';
import { UNTERMINATED_BASIC_STRING_PATTERN } from '../../../../components/common/TomlEditor/tokenizerRules.ts';

function testPatternInWorker(input: string, timeoutMs = 2_000): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(`
      const { parentPort, workerData } = require('node:worker_threads');
      const pattern = new RegExp('^(?:' + workerData.source + ')', workerData.flags);
      parentPort.postMessage(pattern.test(workerData.input));
    `, {
      eval: true,
      workerData: {
        source: UNTERMINATED_BASIC_STRING_PATTERN.source,
        flags: UNTERMINATED_BASIC_STRING_PATTERN.flags,
        input,
      },
    });

    const timeout = setTimeout(() => {
      void worker.terminate();
      reject(new Error(`TOML tokenizer pattern exceeded ${timeoutMs}ms`));
    }, timeoutMs);

    worker.once('message', (result: boolean) => {
      clearTimeout(timeout);
      void worker.terminate();
      resolve(result);
    });
    worker.once('error', (error) => {
      clearTimeout(timeout);
      void worker.terminate();
      reject(error);
    });
  });
}

test('unterminated basic string pattern handles escaped content', async () => {
  assert.equal(await testPatternInWorker(String.raw`"C:\Users\Administrator`), true);
  assert.equal(await testPatternInWorker(String.raw`"closed" ]`), false);
});

test('unterminated basic string pattern does not backtrack exponentially', async () => {
  const nestedNotifyLikeInput = `"${String.raw`\a`.repeat(128)}" ]`;

  assert.equal(await testPatternInWorker(nestedNotifyLikeInput), false);
});
