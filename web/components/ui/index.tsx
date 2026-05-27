import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { createRoot } from 'react-dom/client';
import './ui.css';

type AnyRecord = Record<string, any>;
type NamePath = string | number | Array<string | number>;

export type CheckboxChangeEvent = {
  target: {
    checked: boolean;
    value?: any;
  };
};

type BaseProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: any;
  [key: string]: any;
};

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  danger?: boolean;
  size?: 'small' | 'middle' | 'large';
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  block?: boolean;
  ghost?: boolean;
  shape?: string;
};

type FormItemChildFunction = (helpers: Pick<FormStore, 'getFieldValue' | 'setFieldsValue' | 'setFieldValue'>) => React.ReactNode;
type FormRule = {
  required?: boolean;
  message?: React.ReactNode;
  validator?: (rule: FormRule, value: any) => Promise<void> | void;
  [key: string]: any;
};
type FormShouldUpdate = ((previousValues: AnyRecord, currentValues: AnyRecord) => boolean) | boolean;

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> & {
  status?: 'error' | 'warning';
  size?: 'small' | 'middle' | 'large';
  allowClear?: boolean;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  visibilityToggle?: boolean;
  variant?: string;
};

type TextAreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> & {
  autoSize?: boolean | AnyRecord;
  showCount?: boolean;
};

type InputNumberProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> & {
  value?: number | null;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number | null) => void;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  size?: 'small' | 'middle' | 'large';
  controls?: boolean;
  precision?: number;
};

type SelectOptionItem = {
  value?: any;
  label?: any;
  disabled?: boolean;
  options?: SelectOptionItem[];
  [key: string]: any;
};

type SelectProps = BaseProps & {
  value?: any;
  defaultValue?: any;
  mode?: 'multiple' | string;
  options?: SelectOptionItem[];
  allowClear?: boolean;
  placeholder?: React.ReactNode;
  disabled?: boolean;
  onChange?: (value: any, option?: any) => void;
  filterOption?: (inputValue: string, option?: any) => boolean;
  onSearch?: (value: string) => void;
  optionRender?: (option: any) => React.ReactNode;
  optionFilterProp?: string;
  showSearch?: boolean | AnyRecord;
};

type CheckboxProps = BaseProps & {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: any;
  onChange?: (event: CheckboxChangeEvent) => void;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
};

type SwitchProps = BaseProps & {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

type RadioProps = BaseProps & {
  value?: any;
};

type RadioGroupProps = BaseProps & {
  value?: any;
  defaultValue?: any;
  options?: SelectOptionItem[];
  onChange?: (event: RadioChangeEvent) => void;
};

type RadioButtonProps = RadioProps & {
  checked?: boolean;
};

export type MenuProps = {
  items?: MenuItem[];
  onClick?: (info: { key: string; domEvent?: Event }) => void;
  [key: string]: any;
};

export type MenuItem = {
  key?: React.Key;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  type?: 'divider' | 'group';
  children?: MenuItem[];
  onClick?: (info: { key: string; domEvent?: Event }) => void;
};

export type ColumnsType<T = AnyRecord> = Array<ColumnType<T>>;
export type TableProps<T = AnyRecord> = {
  columns?: ColumnsType<T>;
  dataSource?: T[];
  rowKey?: keyof T | ((record: T) => React.Key);
  pagination?: false | AnyRecord;
  rowSelection?: AnyRecord;
  loading?: boolean;
  size?: 'small' | 'middle' | 'large';
  onRow?: (record: T, index?: number) => React.HTMLAttributes<HTMLTableRowElement>;
  className?: string;
  style?: React.CSSProperties;
  scroll?: AnyRecord;
  bordered?: boolean;
  locale?: AnyRecord;
  onChange?: (...args: any[]) => void;
  [key: string]: any;
};

export type ColumnType<T = AnyRecord> = {
  title?: React.ReactNode;
  dataIndex?: keyof T | string | Array<string | number>;
  key?: React.Key;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, record: T, index: number) => React.ReactNode;
  ellipsis?: boolean;
  fixed?: string | boolean;
  sorter?: any;
};

export type TabsProps = {
  items?: TabItem[];
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (activeKey: string) => void;
  onTabClick?: (activeKey: string) => void;
  className?: string;
  style?: React.CSSProperties;
  destroyInactiveTabPane?: boolean;
  tabBarExtraContent?: React.ReactNode | { left?: React.ReactNode; right?: React.ReactNode };
  size?: string;
  tabBarGutter?: number;
  indicator?: {
    size?: number | ((origin: number) => number);
    align?: string;
  } & AnyRecord;
  [key: string]: any;
};

type TabItem = {
  key: string;
  label: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export type RadioChangeEvent = {
  target: {
    value: any;
    checked?: boolean;
  };
};

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

const toPath = (name: NamePath): Array<string | number> => Array.isArray(name) ? name : [name];

const getIn = (source: AnyRecord, name: NamePath) => {
  let current: any = source;
  for (const part of toPath(name)) {
    if (current == null) return undefined;
    current = current[part];
  }
  return current;
};

const setIn = (source: AnyRecord, name: NamePath, value: any) => {
  const path = toPath(name);
  const next = Array.isArray(source) ? [...source] : { ...source };
  let current: any = next;
  path.forEach((part, index) => {
    if (index === path.length - 1) {
      current[part] = value;
      return;
    }
    const existing = current[part];
    const child = Array.isArray(existing)
      ? [...existing]
      : existing && typeof existing === 'object'
        ? { ...existing }
        : typeof path[index + 1] === 'number'
          ? []
          : {};
    current[part] = child;
    current = child;
  });
  return next;
};

const valueFromEvent = (event: any) => {
  if (event && event.target) {
    const target = event.target;
    if ('checked' in target && target.type === 'checkbox') return target.checked;
    return target.value;
  }
  return event;
};

class FormStore {
  private values: AnyRecord = {};
  private initialValues: AnyRecord = {};
  private listeners = new Set<() => void>();
  private submitHandler?: (values: any) => void;
  private valuesChangeHandler?: (changed: any, all: any) => void;
  private rules = new Map<string, any[]>();

  getFieldsValue = (_names?: NamePath[] | true) => this.values;
  getFieldValue = (name: NamePath) => getIn(this.values, name);
  setInitialValues = (values?: AnyRecord) => {
    this.initialValues = values ? { ...values } : {};
    this.values = { ...this.initialValues, ...this.values };
    this.notify();
  };
  setCallbacks = (callbacks: { onFinish?: (values: any) => void; onValuesChange?: (changed: any, all: any) => void }) => {
    this.submitHandler = callbacks.onFinish;
    this.valuesChangeHandler = callbacks.onValuesChange;
  };
  setFieldsValue = (values: AnyRecord) => {
    this.values = mergeValues(this.values, values);
    this.notify();
  };
  setFieldValue = (name: NamePath, value: any) => {
    this.values = setIn(this.values, name, value);
    this.valuesChangeHandler?.(setIn({}, name, value), this.values);
    this.notify();
  };
  resetFields = () => {
    this.values = { ...this.initialValues };
    this.notify();
  };
  validateFields = async (names?: NamePath[]): Promise<any> => {
    const invalid = Array.from(this.rules.entries()).find(([key, rules]) => {
      if (names && !names.some((name) => String(toPath(name).join('.')) === key)) return false;
      const value = getIn(this.values, key.split('.'));
      return rules.some((rule) => rule?.required && (value === undefined || value === null || value === ''));
    });
    if (invalid) {
      return Promise.reject(new Error('Validation failed'));
    }
    return this.values;
  };
  submit = () => {
    this.validateFields()
      .then((values) => this.submitHandler?.(values))
      .catch(() => undefined);
  };
  registerRules = (name: NamePath | undefined, rules?: any[]) => {
    if (!name) {
      return () => {};
    }
    const key = toPath(name).join('.');
    if (rules?.length) this.rules.set(key, rules);
    return () => {
      this.rules.delete(key);
    };
  };
  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };
  private notify = () => {
    this.listeners.forEach((listener) => listener());
  };
}

export type FormInstance<T = any> = FormStore & {
  getFieldsValue: (names?: NamePath[] | true) => T;
  setFieldsValue: (values: Partial<T> | AnyRecord) => void;
  validateFields: (names?: NamePath[]) => Promise<any>;
};

const mergeValues = (base: AnyRecord, patch: AnyRecord): AnyRecord => {
  let next: AnyRecord = Array.isArray(base) ? [...base] : { ...base };
  Object.entries(patch).forEach(([key, value]) => {
    if (value && typeof value === 'object' && !Array.isArray(value) && base[key] && typeof base[key] === 'object' && !Array.isArray(base[key])) {
      next[key] = mergeValues(base[key], value);
    } else {
      next[key] = value;
    }
  });
  return next;
};

const FormContext = React.createContext<FormStore | null>(null);

const useForceUpdate = () => {
  const [, setTick] = React.useState(0);
  return React.useCallback(() => setTick((tick) => tick + 1), []);
};

const useFormStore = (provided?: FormStore) => {
  const ref = React.useRef<FormStore | null>(null);
  if (!ref.current) ref.current = provided || new FormStore();
  return provided || ref.current;
};

const createControlChild = (child: React.ReactNode, props: AnyRecord) => {
  if (!React.isValidElement(child)) return child;
  return React.cloneElement(child as React.ReactElement<any>, props);
};

type FormProps<T = AnyRecord> = BaseProps & {
  form?: FormInstance<T>;
  initialValues?: Partial<T>;
  layout?: 'horizontal' | 'vertical' | 'inline';
  onFinish?: (values: T) => void;
  onValuesChange?: (changedValues: Partial<T>, values: T) => void;
};

type FormItemProps = BaseProps & {
  name?: NamePath;
  label?: React.ReactNode;
  initialValue?: any;
  valuePropName?: string;
  noStyle?: boolean;
  required?: boolean;
  rules?: FormRule[];
  extra?: React.ReactNode;
  shouldUpdate?: FormShouldUpdate;
  wrapperCol?: AnyRecord;
  labelCol?: AnyRecord;
  getValueFromEvent?: (...args: any[]) => any;
  children?: any;
};

type FormItemComponent = {
  (props: Omit<FormItemProps, 'children' | 'shouldUpdate'> & { shouldUpdate: FormShouldUpdate; children: FormItemChildFunction }): React.ReactElement | null;
  (props: FormItemProps): React.ReactElement | null;
};

type FormListOperation = {
  add: (defaultValue?: any) => void;
  remove: (index: number | number[]) => void;
};

type FormListField = {
  key: React.Key;
  name: number;
  fieldKey?: number;
};

type FormListProps = {
  name: NamePath;
  children: (fields: FormListField[], operations: FormListOperation) => React.ReactNode;
};

const FormComponent = <T extends AnyRecord = AnyRecord>({
  form,
  initialValues,
  onFinish,
  onValuesChange,
  layout = 'horizontal',
  className,
  children,
  ...rest
}: FormProps<T>) => {
  const store = useFormStore(form);
  React.useEffect(() => {
    store.setInitialValues(initialValues);
  }, [store, initialValues]);
  React.useEffect(() => {
    store.setCallbacks({ onFinish, onValuesChange });
  }, [store, onFinish, onValuesChange]);
  return (
    <FormContext.Provider value={store}>
      <form
        {...rest}
        className={cx('ui-form', `ui-form-${layout}`, className)}
        onSubmit={(event) => {
          event.preventDefault();
          store.submit();
        }}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

const FormItem = ({
  name,
  label,
  children,
  valuePropName = 'value',
  noStyle,
  required,
  rules,
  extra,
  className,
  style,
  shouldUpdate,
  getValueFromEvent,
  ...rest
}: FormItemProps) => {
  const store = React.useContext(FormContext);
  const forceUpdate = useForceUpdate();
  React.useEffect(() => store?.subscribe(forceUpdate), [store, forceUpdate]);
  React.useEffect(() => store?.registerRules(name, rules || (required ? [{ required: true }] : undefined)), [store, name, rules, required]);

  if (shouldUpdate && typeof children === 'function') {
    const helperStore = store || new FormStore();
    return (
      <div className={cx(noStyle ? undefined : 'ui-form-item', className)} style={style}>
        {children({
          getFieldValue: helperStore.getFieldValue,
          setFieldsValue: helperStore.setFieldsValue,
          setFieldValue: helperStore.setFieldValue,
        })}
      </div>
    );
  }

  const value = name && store ? store.getFieldValue(name) : undefined;
  const controlProps = name && store
    ? {
        [valuePropName]: valuePropName === 'checked' ? Boolean(value) : value,
        onChange: (event: any) => {
          store.setFieldValue(name, getValueFromEvent ? getValueFromEvent(event) : valueFromEvent(event));
          const originalOnChange = React.isValidElement(children) ? (children.props as AnyRecord).onChange : undefined;
          originalOnChange?.(event);
        },
      }
    : {};
  const control = createControlChild(children, controlProps);

  if (noStyle) return <>{control}</>;
  return (
    <div {...rest} className={cx('ui-form-item', className)} style={style}>
      {label && <label className="ui-form-label">{label}{required && <span className="ui-required">*</span>}</label>}
      <div className="ui-form-control">
        {control}
        {extra && <div className="ui-form-extra">{extra}</div>}
      </div>
    </div>
  );
};

const FormList = ({ name, children }: FormListProps) => {
  const store = React.useContext(FormContext);
  const forceUpdate = useForceUpdate();
  React.useEffect(() => store?.subscribe(forceUpdate), [store, forceUpdate]);
  const values = (store?.getFieldValue(name) || []) as any[];
  const fields = values.map((_, index) => ({ key: index, name: index }));
  const operations = {
    add: (value?: any) => store?.setFieldValue(name, [...values, value ?? undefined]),
    remove: (index: number | number[]) => {
      const indexes = Array.isArray(index) ? index : [index];
      store?.setFieldValue(name, values.filter((_, itemIndex) => !indexes.includes(itemIndex)));
    },
  };
  return <>{children(fields, operations)}</>;
};

type FormNamespace = (<T extends AnyRecord = AnyRecord>(props: FormProps<T>) => React.ReactElement) & {
  Item: FormItemComponent;
  List: React.FC<FormListProps>;
  useForm: <T extends AnyRecord = any>() => [FormInstance<T>];
  useWatch: (name: NamePath, options?: { form?: FormInstance; preserve?: boolean } | FormInstance) => any;
};

(FormComponent as FormNamespace).Item = FormItem as FormItemComponent;
(FormComponent as FormNamespace).List = FormList;
(FormComponent as FormNamespace).useForm = <T extends AnyRecord = any>() => {
  const formRef = React.useRef<FormStore | null>(null);
  if (!formRef.current) formRef.current = new FormStore();
  return [formRef.current as FormInstance<T>];
};
(FormComponent as FormNamespace).useWatch = (name: NamePath, options?: { form?: FormInstance; preserve?: boolean } | FormInstance) => {
  const contextStore = React.useContext(FormContext);
  const explicitStore = options instanceof FormStore ? options : options?.form;
  const store = explicitStore || contextStore;
  const forceUpdate = useForceUpdate();
  React.useEffect(() => store?.subscribe(forceUpdate), [store, forceUpdate]);
  return store?.getFieldValue(name);
};

export const Form = FormComponent as FormNamespace;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  type,
  danger,
  size,
  loading,
  disabled,
  icon,
  children,
  className,
  htmlType,
  block,
  ghost,
  shape,
  ...rest
}, ref) => (
  <button
    {...rest}
    ref={ref}
    type={htmlType || 'button'}
    disabled={disabled || loading}
    className={cx('ui-btn', type === 'primary' && 'ui-btn-primary', type === 'link' && 'ui-btn-link', danger && 'ui-btn-danger', size === 'small' && 'ui-btn-sm', block && 'ui-btn-block', ghost && 'ui-btn-ghost', shape === 'circle' && 'ui-btn-circle', className)}
  >
    {loading && <span className="ui-spinner ui-spinner-inline" />}
    {icon}
    {children}
  </button>
));
Button.displayName = 'Button';

type SpaceProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> & {
  direction?: 'horizontal' | 'vertical';
  orientation?: 'horizontal' | 'vertical' | string;
  size?: number | 'small' | 'middle' | 'large' | [number, number];
  wrap?: boolean;
  align?: React.CSSProperties['alignItems'];
};

type SpaceComponentType = React.FC<SpaceProps> & {
  Compact: React.FC<SpaceProps>;
};

const getSpaceGap = (size: SpaceProps['size']) => {
  if (Array.isArray(size)) return size[0];
  if (typeof size === 'number') return size;
  if (size === 'large') return 16;
  if (size === 'small') return 4;
  return 8;
};

const SpaceComponent: SpaceComponentType = ({ children, className, direction, orientation, size = 8, wrap, align, style, ...rest }) => {
  const resolvedDirection = direction || orientation || 'horizontal';
  return (
  <div {...rest} className={cx('ui-space', resolvedDirection === 'vertical' && 'ui-space-vertical', wrap && 'ui-space-wrap', className)} style={{ gap: getSpaceGap(size), alignItems: align, ...style }}>
    {children}
  </div>
  );
};
SpaceComponent.Compact = ({ children, className, ...rest }) => <div {...rest} className={cx('ui-space ui-space-compact', className)}>{children}</div>;
export const Space = SpaceComponent;

type TypographyTextProps = BaseProps & {
  type?: string;
  strong?: boolean;
  code?: boolean;
  copyable?: any;
  ellipsis?: any;
};

type TypographyTitleProps = BaseProps & {
  level?: 1 | 2 | 3 | 4 | 5;
};

type TypographyParagraphProps = BaseProps & {
  type?: string;
  copyable?: any;
  ellipsis?: any;
};

type TypographyLinkProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  type?: string;
  href?: string;
  target?: string;
};

export const Typography: {
  Text: React.FC<TypographyTextProps>;
  Title: React.FC<TypographyTitleProps>;
  Paragraph: React.FC<TypographyParagraphProps>;
  Link: React.FC<TypographyLinkProps>;
} = {
  Text: ({ type, strong, code, copyable: _copyable, ellipsis: _ellipsis, className, children, ...rest }: AnyRecord) => {
    const TagName = code ? 'code' : 'span';
    return <TagName {...rest} className={cx('ui-typography-text', type && `ui-text-${type}`, strong && 'ui-text-strong', className)}>{children}</TagName>;
  },
  Title: ({ level = 1, className, children, ...rest }: AnyRecord) => {
    const TagName = `h${level}` as React.ElementType;
    return <TagName {...rest} className={cx('ui-title', `ui-title-${level}`, className)}>{children}</TagName>;
  },
  Paragraph: ({ type, className, children, ...rest }: AnyRecord) => <p {...rest} className={cx('ui-paragraph', type && `ui-text-${type}`, className)}>{children}</p>,
  Link: ({ className, children, onClick, ...rest }: AnyRecord) => <button type="button" {...rest} onClick={onClick as React.MouseEventHandler<HTMLButtonElement>} className={cx('ui-link', className)}>{children}</button>,
};

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  status,
  addonAfter,
  addonBefore,
  prefix,
  suffix,
  allowClear: _allowClear,
  size: _size,
  visibilityToggle: _visibilityToggle,
  variant: _variant,
  onPressEnter,
  onKeyDown,
  ...rest
}, ref) => {
  const input = (
    <input
      {...rest}
      ref={ref}
      className={cx('ui-input', status === 'error' && 'ui-input-error', (prefix || suffix || addonBefore || addonAfter) ? 'ui-input-composed' : undefined, className)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') onPressEnter?.(event);
        onKeyDown?.(event);
      }}
    />
  );
  if (!prefix && !suffix && !addonBefore && !addonAfter) return input;
  return (
    <span className="ui-input-group">
      {addonBefore && <span className="ui-input-addon">{addonBefore}</span>}
      <span className="ui-input-affix">
        {prefix && <span className="ui-input-prefix">{prefix}</span>}
        {input}
        {suffix && <span className="ui-input-suffix">{suffix}</span>}
      </span>
      {addonAfter && <span className="ui-input-addon">{addonAfter}</span>}
    </span>
  );
});
TextInput.displayName = 'Input';

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, autoSize: _autoSize, showCount: _showCount, ...rest }, ref) => (
  <textarea {...rest} ref={ref} className={cx('ui-input ui-textarea', className)} />
));
TextArea.displayName = 'Input.TextArea';

const Password = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => <TextInput {...props} ref={ref} type="password" />);
Password.displayName = 'Input.Password';

type SearchProps = InputProps & {
  onSearch?: (value: string) => void;
};

const Search = React.forwardRef<HTMLInputElement, SearchProps>(({ onSearch, onPressEnter, ...props }, ref) => (
  <TextInput
    {...props}
    ref={ref}
    onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') onSearch?.((event.target as HTMLInputElement).value);
      onPressEnter?.(event);
    }}
  />
));
Search.displayName = 'Input.Search';

type InputComponent = React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> & {
  TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
  Password: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
  Search: React.ForwardRefExoticComponent<SearchProps & React.RefAttributes<HTMLInputElement>>;
};

export const Input = Object.assign(TextInput, { TextArea, Password, Search }) as InputComponent;

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(({ value, onChange, min, max, step, className, addonAfter, addonBefore, size: _size, controls: _controls, precision: _precision, ...rest }, ref) => {
  const input = (
    <input
      {...rest}
      ref={ref}
      type="number"
      min={min}
      max={max}
      step={step}
      value={value ?? ''}
      className={cx('ui-input ui-input-number', (addonBefore || addonAfter) ? 'ui-input-composed' : undefined, className)}
      onChange={(event) => onChange?.(event.target.value === '' ? null : Number(event.target.value))}
    />
  );
  if (!addonBefore && !addonAfter) return input;
  return (
    <span className="ui-input-group">
      {addonBefore && <span className="ui-input-addon">{addonBefore}</span>}
      {input}
      {addonAfter && <span className="ui-input-addon">{addonAfter}</span>}
    </span>
  );
});
InputNumber.displayName = 'InputNumber';

const normalizeOptions = (options?: any[], children?: React.ReactNode) => {
  const result: Array<{ value: any; label: React.ReactNode; disabled?: boolean }> = [];
  options?.forEach((option) => {
    if (option?.options) {
      option.options.forEach((child: any) => result.push({ value: child.value, label: child.label ?? child.value, disabled: child.disabled }));
    } else if (option?.value !== undefined) {
      result.push({ value: option.value, label: option.label ?? option.value, disabled: option.disabled });
    } else {
      result.push({ value: option.label, label: option.label, disabled: option.disabled });
    }
  });
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const props = child.props as AnyRecord;
      if (props.value !== undefined) result.push({ value: props.value, label: props.children ?? props.label ?? props.value, disabled: props.disabled });
    }
  });
  return result;
};

const SelectOption = ({ children }: AnyRecord) => <>{children}</>;

const SelectComponent = ({ value, defaultValue, onChange, options, children, mode, allowClear, placeholder, disabled, className, style, ...rest }: SelectProps) => {
  const normalized = normalizeOptions(options, children);
  const selectedValues = mode === 'multiple' ? (Array.isArray(value) ? value : []) : value ?? defaultValue ?? '';
  if (mode === 'multiple') {
    return (
      <select
        {...rest}
        multiple
        disabled={disabled}
        value={selectedValues}
        className={cx('ui-select-native', className)}
        style={style}
        onChange={(event) => {
          const next = Array.from(event.target.selectedOptions).map((option) => option.value);
          onChange?.(next, normalized.filter((option) => next.includes(String(option.value))));
        }}
      >
        {normalized.map((option) => <option key={String(option.value)} value={option.value} disabled={option.disabled}>{option.label}</option>)}
      </select>
    );
  }
  return (
    <SelectPrimitive.Root
      value={selectedValues === undefined || selectedValues === null ? '' : String(selectedValues)}
      disabled={disabled}
      onValueChange={(nextValue) => {
        if (nextValue === '__clear__') {
          onChange?.(undefined, undefined);
          return;
        }
        const option = normalized.find((item) => String(item.value) === nextValue);
        onChange?.(option?.value ?? nextValue, option);
      }}
    >
      <SelectPrimitive.Trigger className={cx('ui-select-trigger', className)} style={style}>
        <SelectPrimitive.Value placeholder={placeholder} />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="ui-select-content" position="popper">
          <SelectPrimitive.Viewport>
            {allowClear && <SelectPrimitive.Item className="ui-select-item" value="__clear__">-</SelectPrimitive.Item>}
            {normalized.map((option) => (
              <SelectPrimitive.Item key={String(option.value)} value={String(option.value)} disabled={option.disabled} className="ui-select-item">
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
SelectComponent.Option = SelectOption;
export const Select = SelectComponent as typeof SelectComponent & { Option: typeof SelectOption };

export const AutoComplete = Select;

const CheckboxComponent = ({ checked, defaultChecked, onChange, onClick, children, disabled, className, value, ...rest }: CheckboxProps) => {
  const [innerChecked, setInnerChecked] = React.useState(Boolean(defaultChecked));
  const isChecked = checked ?? innerChecked;
  return (
    <label className={cx('ui-checkbox-wrapper', disabled && 'ui-disabled', className)} onClick={onClick}>
      <CheckboxPrimitive.Root
        {...rest}
        disabled={disabled}
        checked={isChecked}
        className="ui-checkbox"
        onCheckedChange={(nextChecked) => {
          const nextValue = nextChecked === true;
          setInnerChecked(nextValue);
          onChange?.({ target: { checked: nextValue, value } });
        }}
      >
        <CheckboxPrimitive.Indicator>✓</CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {children && <span>{children}</span>}
    </label>
  );
};
CheckboxComponent.Group = ({ options = [], value = [], onChange, children, className }: AnyRecord) => (
  <div className={cx('ui-checkbox-group', className)}>
    {options.map((option: any) => (
      <Checkbox
        key={String(option.value)}
        checked={value.includes(option.value)}
        onChange={(event: any) => {
          const next = event.target.checked ? [...value, option.value] : value.filter((item: any) => item !== option.value);
          onChange?.(next);
        }}
      >
        {option.label}
      </Checkbox>
    ))}
    {children}
  </div>
);
type CheckboxComponentType = React.FC<CheckboxProps> & {
  Group: React.FC<{
    options?: SelectOptionItem[];
    value?: any[];
    onChange?: (checkedValue: any[]) => void;
    className?: string;
    children?: React.ReactNode;
  }>;
};
export const Checkbox = CheckboxComponent as CheckboxComponentType;

const RadioComponent = ({ value, children, className, ...rest }: RadioProps) => (
  <RadioGroupPrimitive.Item {...rest} value={String(value)} className={cx('ui-radio', className)}>
    <span className="ui-radio-indicator" />
    <span>{children}</span>
  </RadioGroupPrimitive.Item>
);
RadioComponent.Group = ({ value, defaultValue, onChange, options, children, className }: RadioGroupProps) => (
  <RadioGroupPrimitive.Root
    value={value ?? defaultValue}
    className={cx('ui-radio-group', className)}
    onValueChange={(nextValue) => onChange?.({ target: { value: nextValue } })}
  >
    {options?.map((option: any) => <Radio key={String(option.value)} value={option.value}>{option.label}</Radio>)}
    {children}
  </RadioGroupPrimitive.Root>
);
RadioComponent.Button = ({ value, children, className, ...rest }: RadioButtonProps) => (
  <RadioGroupPrimitive.Item {...rest} value={String(value)} className={cx('ui-radio-button', className)}>
    {children}
  </RadioGroupPrimitive.Item>
);
type RadioComponentType = React.FC<RadioProps> & {
  Group: React.FC<RadioGroupProps>;
  Button: React.FC<RadioButtonProps>;
};
export const Radio = RadioComponent as RadioComponentType;

export const Switch = ({ checked, defaultChecked, onChange, disabled, className, ...rest }: SwitchProps) => {
  const [innerChecked, setInnerChecked] = React.useState(Boolean(defaultChecked));
  const isChecked = checked ?? innerChecked;
  return (
    <SwitchPrimitive.Root
      {...rest}
      disabled={disabled}
      checked={isChecked}
      className={cx('ui-switch', className)}
      onCheckedChange={(nextChecked) => {
        setInnerChecked(nextChecked);
        onChange?.(nextChecked);
      }}
    >
      <SwitchPrimitive.Thumb className="ui-switch-thumb" />
    </SwitchPrimitive.Root>
  );
};

type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: string;
  bordered?: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  closeIcon?: React.ReactNode;
  variant?: string;
};

export const Tag: React.FC<TagProps> = ({ color, bordered: _bordered, icon, closable, onClose, closeIcon, variant: _variant, className, children, ...rest }) => (
  <span {...rest} className={cx('ui-tag', color && `ui-tag-${color}`, className)}>
    {icon}{children}
    {closable && <button type="button" className="ui-tag-close" onClick={onClose}>{closeIcon || '×'}</button>}
  </span>
);

type CardProps = Omit<React.HTMLAttributes<HTMLElement>, 'title'> & {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  bodyStyle?: React.CSSProperties;
  styles?: { body?: React.CSSProperties };
  size?: string;
};

export const Card: React.FC<CardProps> = ({ title, extra, children, className, bodyStyle, styles, ...rest }) => (
  <section {...rest} className={cx('ui-card', className)}>
    {(title || extra) && <div className="ui-card-head"><div className="ui-card-title">{title}</div><div>{extra}</div></div>}
    <div className="ui-card-body" style={{ ...bodyStyle, ...styles?.body }}>{children}</div>
  </section>
);

export const Empty = ({ description, image, children, className }: AnyRecord) => (
  <div className={cx('ui-empty', className)}>
    {image}
    <div>{description || 'No data'}</div>
    {children}
  </div>
);
Empty.PRESENTED_IMAGE_SIMPLE = null;

export const Spin = ({ spinning = true, children, className, ...rest }: AnyRecord) => (
  <div {...rest} className={cx('ui-spin-nested-loading', className)}>
    {spinning && <span className="ui-spinner" />}
    <div className="ui-spin-container">{children}</div>
  </div>
);

export const Alert = ({ type = 'info', message, description, showIcon, closable: _closable, onClose: _onClose, className, action, ...rest }: AnyRecord) => (
  <div {...rest} className={cx('ui-alert', `ui-alert-${type}`, className)}>
    {showIcon && <span className="ui-alert-icon">!</span>}
    <div className="ui-alert-content">
      {message && <div className="ui-alert-message">{message}</div>}
      {description && <div className="ui-alert-description">{description}</div>}
    </div>
    {action}
  </div>
);

export const Divider = ({ children, className }: AnyRecord) => <div className={cx('ui-divider', className)}>{children && <span>{children}</span>}</div>;

export const Tooltip = ({ title, children, className }: AnyRecord) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root delayDuration={220}>
      <TooltipPrimitive.Trigger asChild>{React.isValidElement(children) ? children : <span>{children}</span>}</TooltipPrimitive.Trigger>
      {title && (
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className={cx('ui-tooltip', className)} sideOffset={6}>{title}</TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      )}
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

type DropdownProps = BaseProps & {
  menu?: MenuProps;
  trigger?: string[];
  overlayClassName?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({ menu, children, trigger: _trigger, overlayClassName }) => (
  <DropdownMenuPrimitive.Root>
    <DropdownMenuPrimitive.Trigger asChild>{React.isValidElement(children) ? children : <button type="button">{children}</button>}</DropdownMenuPrimitive.Trigger>
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content className={cx('ui-dropdown-content', overlayClassName)} align="end" sideOffset={6}>
        {menu?.items?.map((item: MenuItem) => {
          if (!item) return null;
          if (item.type === 'divider') return <DropdownMenuPrimitive.Separator key={String(item.key ?? Math.random())} className="ui-dropdown-separator" />;
          return (
            <DropdownMenuPrimitive.Item
              key={String(item.key)}
              disabled={item.disabled}
              className={cx('ui-dropdown-item', item.danger && 'ui-dropdown-danger')}
              onSelect={(event) => {
                item.onClick?.({ key: String(item.key), domEvent: event as unknown as Event });
                menu?.onClick?.({ key: String(item.key), domEvent: event as unknown as Event });
              }}
            >
              {item.icon}
              {item.label}
            </DropdownMenuPrimitive.Item>
          );
        })}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  </DropdownMenuPrimitive.Root>
);

type ModalFooterRender = (
  originNode: React.ReactNode,
  extra: {
    OkBtn: React.FC;
    CancelBtn: React.FC;
  }
) => React.ReactNode;

type ModalProps = BaseProps & {
  open?: boolean;
  visible?: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode | ModalFooterRender;
  onOk?: () => void;
  onCancel?: () => void;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  closable?: boolean;
  centered?: boolean;
  width?: number | string;
  maskClosable?: boolean;
  keyboard?: boolean;
};

type ModalStaticConfig = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
  footer?: React.ReactNode | ModalFooterRender;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  okType?: 'primary' | 'danger' | 'default';
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  closable?: boolean;
  maskClosable?: boolean;
  keyboard?: boolean;
  [key: string]: any;
};

type ModalComponent = React.FC<ModalProps> & {
  confirm: (config: ModalStaticConfig) => { destroy: () => void };
  error: (config: ModalStaticConfig) => { destroy: () => void } | void;
  info: (config: ModalStaticConfig) => { destroy: () => void } | void;
  success: (config: ModalStaticConfig) => { destroy: () => void } | void;
  warning: (config: ModalStaticConfig) => { destroy: () => void };
  destroyAll: () => void;
};

const ModalComponent: ModalComponent = ({ open, visible, title, children, footer, onOk, onCancel, okText = 'OK', cancelText = 'Cancel', closable = true, centered: _centered, className, width, maskClosable = true, keyboard = true, ...rest }) => {
  const isOpen = Boolean(open ?? visible);
  const OkBtn = () => <Button type="primary" onClick={onOk}>{okText}</Button>;
  const CancelBtn = () => <Button onClick={onCancel}>{cancelText}</Button>;
  const defaultFooter = (
    <div className="ui-modal-footer">
      <CancelBtn />
      <OkBtn />
    </div>
  );
  const resolvedFooter = footer === null
    ? null
    : typeof footer === 'function'
      ? footer(defaultFooter, { OkBtn, CancelBtn })
      : footer ?? defaultFooter;
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(nextOpen) => !nextOpen && onCancel?.()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="ui-modal-mask" />
        <DialogPrimitive.Content
          {...rest}
          className={cx('ui-modal-content', className)}
          style={{ width, maxWidth: width, ...rest.style }}
          onPointerDownOutside={(event) => {
            if (!maskClosable) event.preventDefault();
          }}
          onEscapeKeyDown={(event) => {
            if (!keyboard) event.preventDefault();
          }}
        >
          <div className="ui-modal-header">
            <DialogPrimitive.Title className="ui-modal-title">{title}</DialogPrimitive.Title>
            {closable && <DialogPrimitive.Close asChild><button type="button" className="ui-modal-close">×</button></DialogPrimitive.Close>}
          </div>
          <div className="ui-modal-body">{children}</div>
          {resolvedFooter}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

const staticModalDestroyers = new Set<() => void>();

const showStaticModal = (config: ModalStaticConfig, mode: 'confirm' | 'notice' = 'confirm') => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  let destroyed = false;
  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    root.unmount();
    container.remove();
    staticModalDestroyers.delete(destroy);
  };
  staticModalDestroyers.add(destroy);

  const handleOk = async () => {
    await config.onOk?.();
    destroy();
  };
  const handleCancel = () => {
    config.onCancel?.();
    destroy();
  };

  const OkBtn: React.FC<ButtonProps> = (buttonProps = {}) => {
    const { onClick, ...restButtonProps } = buttonProps;
    return (
      <Button
        type={config.okType === 'danger' ? 'default' : 'primary'}
        danger={config.okType === 'danger'}
        onClick={async (event) => {
          onClick?.(event);
          if (!event.defaultPrevented) await handleOk();
        }}
        {...config.okButtonProps}
        {...restButtonProps}
      >
        {config.okText || 'OK'}
      </Button>
    );
  };
  const CancelBtn: React.FC<ButtonProps> = (buttonProps = {}) => {
    const { onClick, ...restButtonProps } = buttonProps;
    return (
      <Button
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) handleCancel();
        }}
        {...config.cancelButtonProps}
        {...restButtonProps}
      >
        {config.cancelText || 'Cancel'}
      </Button>
    );
  };
  const defaultFooter = mode === 'confirm'
    ? (
      <div className="ui-modal-footer">
        <CancelBtn />
        <OkBtn />
      </div>
    )
    : (
      <div className="ui-modal-footer">
        <OkBtn />
      </div>
    );
  const footer = config.footer === null
    ? null
    : typeof config.footer === 'function'
      ? config.footer(defaultFooter, { OkBtn, CancelBtn })
      : config.footer ?? defaultFooter;

  root.render(
    <Modal
      open
      title={config.title}
      footer={footer}
      onCancel={handleCancel}
      closable={config.closable ?? true}
      maskClosable={config.maskClosable ?? true}
      keyboard={config.keyboard ?? true}
      width={config.width}
    >
      {config.content}
    </Modal>
  );
  return { destroy };
};
ModalComponent.confirm = (config: ModalStaticConfig) => showStaticModal(config, 'confirm');
ModalComponent.error = (config: ModalStaticConfig) => showStaticModal(config, 'notice');
ModalComponent.info = ModalComponent.error;
ModalComponent.success = ModalComponent.error;
ModalComponent.warning = (config: ModalStaticConfig) => showStaticModal(config, 'notice');
ModalComponent.destroyAll = () => staticModalDestroyers.forEach((destroy) => destroy());
export const Modal = ModalComponent;

type PopconfirmProps = BaseProps & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  onConfirm?: (event?: React.MouseEvent) => void;
  onCancel?: (event?: React.MouseEvent) => void;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
};

export const Popconfirm: React.FC<PopconfirmProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
  okText = 'OK',
  cancelText = 'Cancel',
  okButtonProps,
  cancelButtonProps,
  children,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>{React.isValidElement(children) ? children : <button type="button">{children}</button>}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content className="ui-popconfirm" sideOffset={8} align="center">
          <div className="ui-popconfirm-title">{title}</div>
          {description && <div className="ui-popconfirm-description">{description}</div>}
          <div className="ui-popconfirm-actions">
            <Button
              size="small"
              onClick={(event) => {
                onCancel?.(event);
                setOpen(false);
              }}
              {...cancelButtonProps}
            >
              {cancelText}
            </Button>
            <Button
              size="small"
              type="primary"
              onClick={(event) => {
                onConfirm?.(event);
                setOpen(false);
              }}
              {...okButtonProps}
            >
              {okText}
            </Button>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};

type CollapseKey = string;
type CollapseProps = BaseProps & {
  items?: Array<AnyRecord>;
  defaultActiveKey?: CollapseKey | CollapseKey[];
  activeKey?: CollapseKey | CollapseKey[];
  onChange?: (keys: CollapseKey[]) => void;
  bordered?: boolean;
  ghost?: boolean;
};

type CollapseComponent = React.FC<CollapseProps> & {
  Panel: React.FC<AnyRecord>;
};

const CollapseComponent: CollapseComponent = ({ items, children, className, defaultActiveKey, activeKey, onChange, ...rest }) => {
  const normalized = items || React.Children.toArray(children).map((child: any) => child?.props).filter(Boolean);
  const initial = Array.isArray(defaultActiveKey) ? defaultActiveKey[0] : defaultActiveKey;
  const activeKeys = activeKey === undefined ? undefined : (Array.isArray(activeKey) ? activeKey.map(String) : [String(activeKey)]);
  return (
    <div {...rest} className={cx('ant-collapse ui-collapse', className)}>
      {normalized.map((item: AnyRecord) => (
        <details
          key={String(item.key)}
          className="ant-collapse-item ui-collapse-item"
          open={(activeKeys ? activeKeys.includes(String(item.key)) : undefined) ?? (initial ? String(initial) === String(item.key) : undefined)}
          onToggle={(event) => {
            const isOpen = (event.target as HTMLDetailsElement).open;
            const key = String(item.key);
            const baseKeys = activeKeys ?? [];
            onChange?.(isOpen ? Array.from(new Set([...baseKeys, key])) : baseKeys.filter((activeItemKey) => activeItemKey !== key));
          }}
        >
          <summary className="ant-collapse-header ui-collapse-header">{item.label || item.header}</summary>
          <div className="ant-collapse-content ui-collapse-content">
            <div className="ant-collapse-content-box ui-collapse-content-box">{item.children}</div>
          </div>
        </details>
      ))}
    </div>
  );
};
CollapseComponent.Panel = ({ children }: AnyRecord) => <>{children}</>;
export const Collapse = CollapseComponent;

export const Tabs = ({ items = [], activeKey, defaultActiveKey, onChange, onTabClick, className, style, tabBarExtraContent }: TabsProps) => {
  const firstKey = items[0]?.key;
  const extraContent = tabBarExtraContent && typeof tabBarExtraContent === 'object' && !React.isValidElement(tabBarExtraContent) && !Array.isArray(tabBarExtraContent)
    ? tabBarExtraContent as { left?: React.ReactNode; right?: React.ReactNode }
    : null;
  const leftExtra = extraContent
    ? extraContent.left
    : null;
  const rightExtra = extraContent
    ? extraContent.right
    : tabBarExtraContent;
  return (
    <TabsPrimitive.Root value={activeKey ?? defaultActiveKey ?? firstKey} onValueChange={onChange} className={cx('ant-tabs ui-tabs', className)} style={style}>
      <div className="ui-tabs-nav-row">
        {leftExtra}
        <TabsPrimitive.List className="ant-tabs-nav ui-tabs-list">
          {items.map((item) => (
            <TabsPrimitive.Trigger
              key={item.key}
              value={item.key}
              disabled={item.disabled}
              className="ant-tabs-tab ui-tabs-trigger"
              onClick={() => onTabClick?.(item.key)}
            >
              {item.icon}{item.label}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
        {extraContent && <>{rightExtra}</>}
      </div>
      {items.map((item) => <TabsPrimitive.Content key={item.key} value={item.key} className="ui-tabs-content">{item.children}</TabsPrimitive.Content>)}
    </TabsPrimitive.Root>
  );
};

type SegmentedOption = string | number | {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
};

type SegmentedProps = BaseProps & {
  options?: SegmentedOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  size?: 'small' | 'middle' | 'large';
};

export const Segmented: React.FC<SegmentedProps> = ({ options = [], value, onChange, className }) => (
  <div className={cx('ui-segmented', className)}>
    {options.map((option) => {
      const itemValue = typeof option === 'object' ? option.value : option;
      const label = typeof option === 'object' ? option.label : option;
      const disabled = typeof option === 'object' ? option.disabled : false;
      return <button key={String(itemValue)} type="button" disabled={disabled} className={cx('ui-segmented-item', value === itemValue && 'ui-segmented-active')} onClick={() => onChange?.(itemValue)}>{label}</button>;
    })}
  </div>
);

export const Table = <T extends AnyRecord = AnyRecord>({ columns = [], dataSource = [], rowKey, rowSelection, loading, className, onRow }: TableProps<T>) => (
  <div className={cx('ui-table-wrap', className)}>
    {loading && <Spin />}
    <table className="ant-table ui-table">
      <thead className="ant-table-thead">
        <tr>
          {rowSelection && <th><Checkbox checked={rowSelection.selectedRowKeys?.length === dataSource.length && dataSource.length > 0} onChange={(event: any) => rowSelection.onChange?.(event.target.checked ? dataSource.map((record, index) => getRowKey(record, index, rowKey)) : [], event.target.checked ? dataSource : [])} /></th>}
          {columns.map((column, index) => <th key={String(column.key ?? column.dataIndex ?? index)} style={{ width: column.width, textAlign: column.align }}>{column.title}</th>)}
        </tr>
      </thead>
      <tbody className="ant-table-tbody">
        {dataSource.map((record, rowIndex) => {
          const key = getRowKey(record, rowIndex, rowKey);
          return (
            <tr key={String(key)} {...onRow?.(record, rowIndex)}>
              {rowSelection && <td><Checkbox checked={rowSelection.selectedRowKeys?.includes(key)} onChange={(event: any) => {
                const selected = new Set(rowSelection.selectedRowKeys || []);
                if (event.target.checked) selected.add(key);
                else selected.delete(key);
                const keys = Array.from(selected);
                rowSelection.onChange?.(keys, dataSource.filter((item, index) => keys.includes(getRowKey(item, index, rowKey))));
              }} /></td>}
              {columns.map((column, columnIndex) => {
                const value = column.dataIndex ? getIn(record as AnyRecord, column.dataIndex as NamePath) : undefined;
                return <td key={String(column.key ?? column.dataIndex ?? columnIndex)} style={{ textAlign: column.align }}>{column.render ? column.render(value, record, rowIndex) : value}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

const getRowKey = <T extends AnyRecord>(record: T, index: number, rowKey?: keyof T | ((record: T) => React.Key)) => {
  if (typeof rowKey === 'function') return rowKey(record);
  if (rowKey) return record[rowKey] as React.Key;
  return (record.key ?? record.id ?? index) as React.Key;
};

export const Progress = ({ percent = 0, status: _status, className }: AnyRecord) => (
  <ProgressPrimitive.Root className={cx('ui-progress', className)} value={percent}>
    <ProgressPrimitive.Indicator className="ui-progress-indicator" style={{ transform: `translateX(-${100 - Number(percent)}%)` }} />
  </ProgressPrimitive.Root>
);

type DatePickerValue = string | null | undefined;
type RangePickerValue = [DatePickerValue, DatePickerValue] | null | undefined;
type DatePickerProps = BaseProps & {
  value?: DatePickerValue;
  onChange?: (date: DatePickerValue, dateString: string) => void;
};
type RangePickerProps = BaseProps & {
  value?: RangePickerValue;
  onChange?: (dates: RangePickerValue, dateStrings: [string, string]) => void;
};
type DatePickerComponent = React.FC<DatePickerProps> & {
  RangePicker: React.FC<RangePickerProps>;
};

const DatePickerComponent: DatePickerComponent = ({ value, onChange, className }) => (
  <input className={cx('ui-input', className)} type="date" value={value || ''} onChange={(event) => onChange?.(event.target.value, event.target.value)} />
);
DatePickerComponent.RangePicker = ({ value, onChange, className }: RangePickerProps) => (
  <div className={cx('ui-range-picker', className)}>
    <input
      className="ui-input"
      type="date"
      value={value?.[0] || ''}
      onChange={(event) => onChange?.([event.target.value, value?.[1] || ''], [event.target.value, value?.[1] || ''])}
    />
    <span>-</span>
    <input
      className="ui-input"
      type="date"
      value={value?.[1] || ''}
      onChange={(event) => onChange?.([value?.[0] || '', event.target.value], [value?.[0] || '', event.target.value])}
    />
  </div>
);
export const DatePicker = DatePickerComponent;

type PaginationProps = BaseProps & {
  current?: number;
  total?: number;
  pageSize?: number;
  onChange?: (page: number, pageSize: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ current = 1, total = 0, pageSize = 10, onChange, className }) => (
  <div className={cx('ui-pagination', className)}>
    <Button size="small" disabled={current <= 1} onClick={() => onChange?.(current - 1, pageSize)}>Prev</Button>
    <span>{current} / {Math.max(1, Math.ceil(total / pageSize))}</span>
    <Button size="small" disabled={current >= Math.ceil(total / pageSize)} onClick={() => onChange?.(current + 1, pageSize)}>Next</Button>
  </div>
);

const DescriptionsComponent = ({ items, children, className }: AnyRecord) => (
  <dl className={cx('ui-descriptions', className)}>
    {items?.map((item: AnyRecord) => <React.Fragment key={String(item.key ?? item.label)}><dt>{item.label}</dt><dd>{item.children}</dd></React.Fragment>)}
    {children}
  </dl>
);
DescriptionsComponent.Item = ({ label, children }: AnyRecord) => <><dt>{label}</dt><dd>{children}</dd></>;
export const Descriptions = DescriptionsComponent;

type ListProps<T = any> = BaseProps & {
  dataSource?: T[];
  renderItem?: (item: T, index: number) => React.ReactNode;
};

type ListComponent = (<T = any>(props: ListProps<T>) => React.ReactElement) & {
  Item: React.FC<BaseProps & { actions?: React.ReactNode[] }> & {
    Meta: React.FC<{
      avatar?: React.ReactNode;
      title?: React.ReactNode;
      description?: React.ReactNode;
    }>;
  };
};

const ListComponent = <T = any,>({ dataSource = [], renderItem, children, className }: ListProps<T>) => (
  <div className={cx('ui-list', className)}>
    {dataSource.map((item, index) => renderItem ? renderItem(item, index) : item as React.ReactNode)}
    {children}
  </div>
);
const ListItem = (({ children, className, actions }: AnyRecord) => <div className={cx('ui-list-item', className)}><div>{children}</div>{actions && <div className="ui-list-actions">{actions}</div>}</div>) as ListComponent['Item'];
ListItem.Meta = ({ avatar, title, description }: { avatar?: React.ReactNode; title?: React.ReactNode; description?: React.ReactNode }) => (
  <div className="ui-list-meta">
    {avatar && <div className="ui-list-meta-avatar">{avatar}</div>}
    <div className="ui-list-meta-content">
      {title && <div className="ui-list-meta-title">{title}</div>}
      {description && <div className="ui-list-meta-description">{description}</div>}
    </div>
  </div>
);
ListComponent.Item = ListItem;
export const List = ListComponent as ListComponent;

export const Row = ({ children, gutter, className, ...rest }: AnyRecord) => <div {...rest} className={cx('ui-row', className)} style={{ gap: Array.isArray(gutter) ? gutter[0] : gutter }}>{children}</div>;
export const Col = ({ children, span, className, ...rest }: AnyRecord) => <div {...rest} className={cx('ui-col', className)} style={{ flexBasis: span ? `${(span / 24) * 100}%` : undefined }}>{children}</div>;

type MenuComponentProps = BaseProps & MenuProps & {
  selectedKeys?: React.Key[];
  mode?: string;
  inlineCollapsed?: boolean;
};

export const Menu: React.FC<MenuComponentProps> = ({ items = [], onClick, className, selectedKeys = [] }) => (
  <div className={cx('ui-menu', className)}>
    {items.map((item: MenuItem) => <button key={String(item.key)} type="button" className={cx('ui-menu-item', selectedKeys.includes(item.key || '') && 'ui-menu-item-selected')} onClick={() => onClick?.({ key: String(item.key) })}>{item.icon}{item.label}</button>)}
  </div>
);

export const Drawer = ({ open, visible, title, children, onClose, width = 420, placement = 'right', className, ...rest }: AnyRecord) => (
  <DialogPrimitive.Root open={Boolean(open ?? visible)} onOpenChange={(nextOpen) => !nextOpen && onClose?.()}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="ui-modal-mask" />
      <DialogPrimitive.Content {...rest} className={cx('ui-drawer-content', `ui-drawer-${placement}`, className)} style={{ width, ...rest.style }}>
        <div className="ui-modal-header">
          <DialogPrimitive.Title className="ui-modal-title">{title}</DialogPrimitive.Title>
          <DialogPrimitive.Close asChild><button type="button" className="ui-modal-close">×</button></DialogPrimitive.Close>
        </div>
        <div className="ui-modal-body">{children}</div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

type UploadComponentProps = BaseProps & {
  beforeUpload?: (file: File) => boolean | Promise<boolean | void> | void;
  onChange?: (info: { file: File; fileList: File[] }) => void;
  disabled?: boolean;
  multiple?: boolean;
  showUploadList?: boolean;
};

type UploadComponentType = React.FC<UploadComponentProps> & {
  Dragger: React.FC<UploadComponentProps>;
  LIST_IGNORE: symbol;
};

const UploadComponent: UploadComponentType = ({ children, beforeUpload, onChange, disabled, multiple, className }) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  return (
    <span className={className}>
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        style={{ display: 'none' }}
        disabled={disabled}
        onChange={async (event) => {
          const files = Array.from(event.target.files || []);
          const file = files[0];
          if (!file) return;
          const result = await beforeUpload?.(file);
          onChange?.({ file, fileList: files });
          if (result === false && inputRef.current) inputRef.current.value = '';
        }}
      />
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<any>, { onClick: () => inputRef.current?.click() })
        : <Button onClick={() => inputRef.current?.click()}>{children}</Button>}
    </span>
  );
};
UploadComponent.Dragger = ({ children, className, ...props }) => (
  <UploadComponent {...props} className={cx('ui-upload-dragger', className)}>
    <div className="ui-upload-dragger-inner">{children}</div>
  </UploadComponent>
);
UploadComponent.LIST_IGNORE = Symbol('LIST_IGNORE');
export const Upload = UploadComponent;

export const Image = ({ src, alt, className, classNames, preview: _preview, ...rest }: AnyRecord) => (
  <span className={cx('ui-image-root', classNames?.root)}>
    <img {...rest} src={src} alt={alt || ''} className={cx(className, classNames?.image)} />
  </span>
);

const toastRoot = () => {
  let root = document.querySelector('.ui-toast-root') as HTMLDivElement | null;
  if (!root) {
    root = document.createElement('div');
    root.className = 'ui-toast-root';
    document.body.appendChild(root);
  }
  return root;
};

const showToast = (type: string, content: React.ReactNode, duration = 3000, key?: string) => {
  const container = document.createElement('div');
  container.className = cx('ui-toast', `ui-toast-${type}`);
  if (key) container.dataset.key = key;
  const root = createRoot(container);
  root.render(<>{content}</>);
  toastRoot().appendChild(container);
  const close = () => {
    root.unmount();
    container.remove();
  };
  if (duration !== 0) window.setTimeout(close, duration);
  return close;
};

export const message: any = {
  success: (content: React.ReactNode) => showToast('success', content),
  error: (content: React.ReactNode) => showToast('error', content),
  warning: (content: React.ReactNode) => showToast('warning', content),
  info: (content: React.ReactNode) => showToast('info', content),
  open: ({ content, type = 'info', duration, key }: AnyRecord) => showToast(type, content, duration, key),
  loading: (content: React.ReactNode) => showToast('loading', content, 0),
  destroy: (key?: string) => {
    const nodes = key ? document.querySelectorAll(`.ui-toast[data-key="${key}"]`) : document.querySelectorAll('.ui-toast');
    nodes.forEach((node) => node.remove());
  },
};

export const notification: any = {
  info: ({ message: title, description, btn, duration }: AnyRecord) => showToast('info', <div><strong>{title}</strong><div>{description}</div>{btn}</div>, duration ? duration * 1000 : 5000),
  destroy: () => message.destroy(),
};

export const App: any = ({ children }: AnyRecord) => <>{children}</>;
App.useApp = () => ({ message, notification, modal: Modal });

export const ConfigProvider = ({ children }: AnyRecord) => <>{children}</>;

export const theme: any = {
  defaultAlgorithm: {},
  darkAlgorithm: {},
  useToken: () => ({
    token: {
      colorPrimary: 'var(--ant-color-primary)',
      colorText: 'var(--color-text-primary)',
      colorTextSecondary: 'var(--color-text-secondary)',
      colorBorder: 'var(--color-border)',
      colorBgContainer: 'var(--color-bg-container)',
    },
  }),
};

export default {
  Alert,
  App,
  AutoComplete,
  Button,
  Card,
  Checkbox,
  Col,
  Collapse,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  Input,
  InputNumber,
  List,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Progress,
  Radio,
  Row,
  Segmented,
  Select,
  Space,
  Spin,
  Switch,
  Table,
  Tabs,
  Tag,
  Tooltip,
  Typography,
  Upload,
  message,
  notification,
  theme,
};
