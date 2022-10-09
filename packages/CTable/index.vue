<template>
  <div class="c-table-pagination">
    <el-table v-bind="$attrs" v-on="$attrs" class="c-table">
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        v-bind="column"
        v-on="column">
        <template #default="scope">
          <template v-if="!column.type || (column.type && column.type === 'expand')">
            <slot :name="column.prop || column.type" :row="scope.row" :column="scope.column" :$index="scope.$index">
              {{ (column.prop && scope.row[column.prop]) || props.emptyText }}
            </slot>
          </template>
          <template v-else-if="column.type && column.type === 'operate' && column.btnList">
            <c-operate :type="column.btnType" :columns="column.btnList(scope).filter(item => item.show || !item.hasOwnProperty('show'))" />
          </template>
        </template>
      </el-table-column>
    </el-table>
    <div class="c-pagination" v-if="props.pagination">
      <el-pagination
        v-model:current-page="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        v-bind="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "CTable"
}
</script>
<script lang="ts" setup>
import {ITableColumn, IPagination} from "./interface";
import {reactive, ref} from "vue";

interface ITableProps {
  columns?: ITableColumn[] | [],
  align?: 'left' | 'center' | 'right', // 整个table布局方式
  emptyText?: string,
  pagination?: IPagination | Object | boolean
}

interface ITableEmits {
  (e: 'paginationChange', pagination: IPagination): void
}

const props = withDefaults(defineProps<ITableProps>(), {
  columns: () => [],
  align: 'left',
  emptyText: '--',
  pagination: () => {
    return {}
  }
})
const emits = defineEmits<ITableEmits>()

// tableColumn type过滤值
const filterType = ref(['selection', 'index']);
// pagination默认值
const pagination: IPagination = reactive(Object.assign({
  currentPage: 1,
  pageSize: 10,
  background: true,
  total: 60,
  pageSizes: [10, 20, 50, 100, 200],
  layout: 'total, sizes, prev, pager, next, jumper',
  small: true
}, props.pagination))


// 处理pagination改变
const handleSizeChange = (val: number) => {
  pagination.pageSize = val
  emits('paginationChange', pagination)
}
const handleCurrentChange = (val: number) => {
  pagination.currentPage = val
  emits('paginationChange', pagination)
}
</script>

<style scoped lang="scss">
.c-pagination {
  display: flex;
  justify-content: right;
  margin-top: 16px;
  text-align: right;

  .el-pagination {
    padding: 0;

    //::v-deep .el-pagination__editor{
    //  margin-right: 0;
    //}
  }
}
</style>
