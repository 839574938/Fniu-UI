export interface IOperateColumns {
  name: string,
  disabled?: boolean,
  type?: string,
  loading?: boolean,
  autoInsertSpace?: boolean,
  bg?: string,
  children?: IOperateColumns[] | [],
  [propName: string]: any
}
