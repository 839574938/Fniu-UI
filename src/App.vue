<template>
  <div>
    {{ queryData }}
    <c-query v-model="queryData" :columns="columns" label-position="top" ref="queryForm">
      <template #password>
        <el-form-item label="密码">
          <el-input v-model="queryData.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </template>
    </c-query>
    <el-button @click="resetForm">重置</el-button>
    <el-button @click="submitForm" type="primary">提交</el-button>



    <c-upload></c-upload>
  </div>
</template>

<script lang="ts">
export default {
  name: "App"
}
</script>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import {IQueryColumn, IQueryExport} from "../packages/CQuery/src/interface";

const queryData = reactive({
  name: '',
  password: '',
  select: null,
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
    attrsFormItem: {label: '姓名777',},
    attrsCol: {span: 6},
    required: true,
    rules: [
      {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
    ]
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
    required: true,
    attrs: {
      onChange: (value: any) => {
        console.log(value)
      }
    },
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


const queryForm = ref<IQueryExport>()
const submitForm = async () => {
  if (queryForm.value) {
    const from = queryForm.value.ruleFormRef
    await from.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!', fields)
      }
    })
  }
}

const resetForm = () => {
  if (queryForm.value) {
    const from = queryForm.value.ruleFormRef
    from.resetFields();
  }
}

</script>

<style scoped lang="scss">

</style>
