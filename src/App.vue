<template>
  {{ queryData }}
  <c-query v-model="queryData" :columns="columns" label-position="top">
    <template #password>
      <el-input v-model="queryData.password" placeholder="请输入密码"></el-input>
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
  }
];
</script>

<style scoped lang="scss">

</style>
