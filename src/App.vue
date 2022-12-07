<template>
  {{ queryData }}
  <c-query v-model="queryData" :columns="columns" label-position="top">
    <template #password>
      <el-form-item label="密码">
        <el-input v-model="queryData.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </template>
  </c-query>
</template>

<script lang="ts">
export default {
  name: "App"
}
</script>
<script lang="ts" setup>
import {reactive} from "vue";
import {IQueryColumn} from "../packages/CQuery/src/interface";

const queryData = reactive({
  name: '',
  password: '',
  select: '0',
  switch: false,
  date: null
})


const options = [
  {value: '0', label: 'text0'},
  {value: '1', label: 'text1'},
  {value: '2', label: 'text2', disabled: true}
]
const columns: IQueryColumn[] = [
  {
    type: 'input',
    key: 'name',
    attrs: {disabled: true,},
    attrsFormItem: {label: '姓名777',},
    attrsCol: {span: 6},
  },
  {
    type: 'input',
    key: 'password',
    label: '密码',
    attrsCol: {span: 6},
  },
  {
    type: 'select',
    key: 'select',
    label: '选择框',
    options: options,
    // attrs: {disabled: true},
  },
  {
    type: 'switch',
    key: 'switch',
    label: '及时配送',
    attrs: {activeValue: "100", inactiveValue: "0"}
  },
  {
    type: 'checkbox',
    key: 'checkbox',
    label: 'checkbox',
    options: options,
  },
  {
    type: 'radio',
    key: 'radio',
    label: '单选按钮',
    options: options,
  },
  {
    type: 'date',
    key: 'date',
    label: '日期',
    attrs: {
      valueFormat: "YYYY-MM-DD",
      format: "YYYY 年 MM 月 DD 日",
    }
  }
];
</script>

<style scoped lang="scss">

</style>
