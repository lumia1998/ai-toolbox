# UI Compatibility Layer

## Source of Truth

- Application code should import shared controls from `@/components/ui` and shared icons from `@/components/ui/icons`.
- Do not import `antd`, `@ant-design/icons`, or `@lobehub/icons` in application code.
- Radix primitives belong inside this local UI layer unless a feature has a narrow, well-justified custom interaction that cannot fit the shared API.

## Why

The app keeps an AntD-shaped component API to minimize migration churn across existing feature modules, but the runtime implementation is local React + Radix UI + Tailwind/CSS. This lets feature code stay simple while removing AntD as a dependency.

The visual source of truth is the previous AntD UI on `main`: migrating internals to Radix/Tailwind must not introduce a new visual language. Prefer AntD-compatible typography, icon alignment, control sizing, modal chrome, card radius, spacing, shadows, and `.ant-*` class behavior over decorative glass/translucent styling.

## Key Flow

- Prefer adapting broad API or styling differences in `web/components/ui/` rather than touching many feature call sites.
- Keep static feedback surfaces (`message`, `notification`, `Modal.confirm`, `Popconfirm`) on the same local styled layer; do not fall back to browser-native `alert` or `confirm`.
- Preserve existing `.ant-*` compatibility class names broadly for migrated AntD-shaped components. Feature CSS still targets these names, and visual parity depends on them; `.ui-*` classes are implementation hooks layered underneath.

## Gotchas

- `ConfigProvider` and `theme` are compatibility exports, not a reason to reintroduce AntD.
- Use theme variables from `web/App.css` and local UI tokens in `ui.css`; avoid hardcoded colors in component styles.
- When adding a control, implement the smallest subset used by the app first. Do not clone a full third-party component library.
- Compatibility is behavioral, not only visual. Existing AntD-shaped call sites depend on details such as built-in `Form` rules, searchable `Select`, image preview, drag-and-drop upload, and `.ant-*` active-state classes; preserve those semantics in this layer before changing feature call sites.

## Minimal Validation

- `./node_modules/.bin/tsc --noEmit`
- `pnpm test`
- `pnpm run test:ui` for local UI compatibility regressions while iterating on `web/components/ui/`
- `NODE_OPTIONS=--max-old-space-size=4096 pnpm build` when frontend entry, shared UI, Tailwind, or CSS processing changes.
- `grep -R "from 'antd'\|from \"antd\"\|@ant-design/icons\|@lobehub/icons" -n package.json pnpm-lock.yaml web`
