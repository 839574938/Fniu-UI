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

const queryData = reactive({
  name: '',
  password: '',
  select: '0',
})

const columns = [
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
    options: [
      {value: '0', label: '0'},
      {value: '1', label: '1'},
      {value: '2', label: '2'}
    ],
    attrsCol: {span: 6},
  }
];
</script>

<style scoped lang="scss">

</style>
