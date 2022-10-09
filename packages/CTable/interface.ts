import {IOperateColumns} from "../COperate/interface";

export interface ITableColumn {
  prop?: string | undefined,
  label?: string,
  width?: string | number,
  disabled?: boolean,
  type?: string | undefined,
  fixed?: true | 'left' | 'right',
  align?: 'left' | 'center' | 'right',  // 优先于整个table的布局方式
  btnList?(scope: object): IOperateColumns[],
  [propName: string]: any;
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
