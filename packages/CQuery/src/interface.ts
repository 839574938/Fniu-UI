export interface IQueryColumn {
  type: 'input' | string,
  key: string,
  label?: string,
  placeholder?: string,
  attrs?: any,
  attrsCol?: any,
  attrsFormItem?: any,
  [propName: string]: any,
}
