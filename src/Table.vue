<template>
  <div id="app">
    <c-table
      border
      :columns="columns"
      :data="data"
      :pagination="pagination"
      @paginationChange="handlePaginationChanged">
      <template #expand="scope">
        <div>
          <h3>Family</h3>
          <div>66666</div>
        </div>
      </template>
    </c-table>
  </div>
</template>

<script lang="ts" setup>
import {IPagination, ITableColumn} from "../packages/CTable/src/interface";
import {reactive, ref} from "vue";

const columns: ITableColumn[] = [
  {
    label: '序号',
    type: 'index',
    align: "center",
    width: 60,
  },
  {
    label: '详情',
    type: 'expand',
    width: 60,
  },
  {
    label: 'date',
    prop: 'date',
    renderText: (scope: any) => {
      return scope.row.date
    },
    width: '196',
  },
  {
    label: 'name',
    prop: 'name'
  },
  {
    label: 'empty text',
  },
  {
    label: '状态',
    type: 'status',
    renderText: () => {
      return '成功';
    },
    status: 'danger',
    statusType: 'dot'
  },
  {
    label: '状态',
    type: 'status',
    renderText: () => {
      return '成功';
    },
    status: () => 'transparent',
    statusType: 'tag'
  },
  {
    type: 'operate',
    label: '操作',
    btnList: [
      {
        name: '查看0',
        onClick: () => {
          console.log(0)
        },
      },
      {
        name: '查看1',
        onClick: () => {
          console.log(1)
        },
      },
      {
        name: '查看2',
        onClick: () => {
          console.log(2)
        },
      },
      {
        name: '查看3',
        onClick: () => {
          console.log(3)
        },
      }
    ]
  }
]
const data = ref([
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
  },
])
const pagination: IPagination = reactive({
  currentPage: 2,
  pageSize: 20,
  total: 100,
})
const handlePaginationChanged = (data: IPagination) => {
  console.log(data)
  pagination.currentPage = data.currentPage
  pagination.pageSize = data.pageSize
}
</script>

<script lang="ts">
export default {
  name: 'Table',
}
</script>
