import {FormInstance} from "element-plus";

export interface IQueryColumn {
  type: 'input' | string,
  key: string,
  label?: string,
  placeholder?: string,
  options?: IOption[],
  attrs?: any,
  attrsCol?: any,
  attrsFormItem?: any,

  [propName: string]: any,
}

/**
 * option配置对象
 * {key: xxx, value: xxx}
 * {label: xxx, value: xxx}
 * {label: xxx, name: xxx}  -> checkbox
 */
export interface IOption {
  key?: string,
  label?: string,
  value?: string | number,
  name?: string | number,
  disabled?: boolean
}

export interface IQueryExport {
  ruleFormRef: FormInstance
}
