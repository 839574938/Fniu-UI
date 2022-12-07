<template>
  <el-form class="c-query" :model="modelValue" :rules="rules" ref="ruleFormRef" v-bind="$attrs">
    <el-row>
      <el-col v-for="(column, index) in props.columns" :key="index" v-bind="column.attrsCol">
        <slot :name="column.key">
          <el-form-item :label="column.label" :prop="column.key" v-bind="column.attrsFormItem">
            <template v-if="column.type === 'input'">
              <el-input v-model="modelValue[column.key]" :placeholder="getPlaceholder(column)" v-bind="column.attrs"/>
            </template>
            <template v-if="column.type === 'select'">
              <el-select v-model="modelValue[column.key]" :placeholder="getPlaceholder(column)" v-bind="column.attrs">
                <el-option
                  v-for="option in column.options"
                  :key="option.value || option.name"
                  :label="option.label || option.key"
                  :value="option.value || option.name"
                  :disabled="option.disabled"
                />
              </el-select>
            </template>
            <template v-if="column.type === 'switch'">
              <el-switch v-model="modelValue[column.key]" v-bind="column.attrs"></el-switch>
            </template>
            <template v-if="column.type === 'checkbox'">
              <el-checkbox-group v-model="modelValue[column.key]" v-bind="column.attrs">
                <el-checkbox
                  v-for="option in column.options"
                  :key="option.value || option.name"
                  :label="option.label || option.key"
                  :name="option.value || option.name"
                  :disabled="option.disabled"
                />
              </el-checkbox-group>
            </template>
            <template v-if="column.type === 'radio'">
              <el-radio-group v-model="modelValue[column.key]" v-bind="column.attrs">
                <el-radio
                  v-for="option in column.options"
                  :key="option.value || option.name"
                  :label="option.value || option.name"
                  :disabled="option.disabled"
                >{{ option.label || option.key }}
                </el-radio>
              </el-radio-group>
            </template>
            <template v-if="column.type === 'date'">
              <el-date-picker
                v-model="modelValue[column.key]"
                type="date"
                :placeholder="getPlaceholder(column)"
                v-bind="column.attrs"
              />
            </template>
          </el-form-item>
        </slot>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
export default {
  name: "CQuery"
}
</script>
<script setup lang="ts">
import {computed, ref, withDefaults} from "vue";
import {IQueryColumn} from "./interface";
import {FormInstance} from "element-plus";

interface IQueryProps {
  columns?: IQueryColumn[] | [],
  modelValue: Object,
  prevPlaceholder?: string,
  prevSelectPlaceholder?: string
}

const props = withDefaults(defineProps<IQueryProps>(), {
  columns: () => [],
  modelValue: () => ({}),
  prevPlaceholder: '请输入',
  prevSelectPlaceholder: '请选择'
})

const getPlaceholder = (column: IQueryColumn) => getTypeData(column).placeholder;
const getTrigger = (column: IQueryColumn) => getTypeData(column).trigger;

const getTypeData = (column: IQueryColumn) => {
  if (!column.attrs) column.attrs = {}
  const defaultPlaceholder = column.placeholder || column.attrs.placeholder
  const label = column.label || column.attrsFormItem.label || ''
  const defaultData = {
    placeholder: defaultPlaceholder,
    trigger: ['blur']
  }
  if (['input'].includes(column.type)) {
    defaultData.placeholder = defaultPlaceholder || `${props.prevPlaceholder}${label}`;
    defaultData.trigger = ['blur'];
  } else if (['select', 'date'].includes(column.type)) {
    defaultData.placeholder = defaultPlaceholder || `${props.prevSelectPlaceholder}${label}`;
    defaultData.trigger = ['change', 'blur'];
  }
  return defaultData
}

const rules = computed(() => {
  return props.columns.reduce((res, item) => {
    res[item.key] = item.rules ? [...item.rules] : [];
    if (item.required) {
      res[item.key].unshift({required: true, message: getPlaceholder(item), trigger: getTrigger(item)})
    }
    return res;
  }, {});
})

// c-query form表单实例
const ruleFormRef = ref<FormInstance>()

defineExpose({
  ruleFormRef,
})

</script>

<style scoped lang="scss">

</style>
