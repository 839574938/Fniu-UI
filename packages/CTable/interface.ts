import {IOperateColumns} from "../COperate/interface";

export interface ITableColumn {
  prop?: string,
  renderText?: ITableColumnBtnListFn<string>, // 默认值优先于prop
  label?: string,
  width?: string | number,
  disabled?: boolean,
  type?: string | undefined,
  fixed?: true | 'left' | 'right',
  align?: 'left' | 'center' | 'right',  // 优先于整个table的布局方式
  btnList?: IOperateColumns[] | ITableColumnBtnListFn<IOperateColumns[]>,
  status?: string | ITableColumnBtnListFn<string>,
  statusType?: string,
  [propName: string]: any;
}

export interface ITableColumnBtnListFn<T> {
  (scope: object): T,
}

export interface IPagination {
  background?: boolean,
  pageSize?: number,
  total?: number,
  currentPage?: number,
  layout?: string,
  pageSizes?: number[],
  disabled?: boolean,  // 优先于整个table的布局方式
  [propName: string]: any;
}
