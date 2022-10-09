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
              {{ realText(column, scope) }}
            </slot>
          </template>
          <template v-else-if="column.type && column.type === 'operate' && column.btnList">
            <c-operate :type="column.btnType" :columns="operateColumns(column, scope)"/>
          </template>
          <template v-else-if="column.type && column.type === 'status' && column.status">
            <c-status :shape="column.statusType" :type="statusTypeAndColor(column, scope)" :color="statusTypeAndColor(column, scope, '1')">
              {{ realText(column, scope) }}
            </c-status>
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
import {computed, reactive, ref} from "vue";
import COperate from "../COperate/index.vue";
import CStatus from "../CStatus/index.vue";

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

const realText = computed(() => {
  return (column: ITableColumn, scope: any) => {
    if (column.renderText) {
      return column.renderText(scope)
    }
    if (column.prop) {
      return scope.row[column.prop]
    }

    return props.emptyText || ''
  }
})

const operateColumns = computed(() => {
  return (column: ITableColumn, scope: any) => {
    if (column.btnList) {
      return Array.isArray(column.btnList) ?
        column.btnList :
        column.btnList(scope).filter(item => item.show || !item.hasOwnProperty('show'))
    }
    return []
  }
})

const statusTypeAndColor = computed(() => {
  return (column: ITableColumn, scope: any, flag = '0') => {
    if (column.status) {
      const status = typeof column.status === 'string' ? column.status : column.status(scope)
      const isStatus = ['success', 'info', 'warning', 'danger', 'error'].indexOf(status) !== -1
      return (flag === '0' ? isStatus : !isStatus) ? status : null
    }
    return null
  }
})
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
