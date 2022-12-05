<template>
  <el-form class="c-query" :model="modelValue" v-bind="$attrs">
    <el-row>
      <el-col v-for="(column, index) in props.columns" :key="index" v-bind="column.attrsCol">
        <slot :name="column.key">
          <el-form-item :label="column.label" v-bind="column.attrsFormItem">
            <template v-if="column.type === 'input'">
              <el-input v-model="modelValue[column.key]" :placeholder="getPlaceholder(column)" v-bind="column.attrs"/>
            </template>
            <template v-if="column.type === 'select'">
              <el-select v-model="modelValue[column.key]" :placeholder="getPlaceholder(column)" v-bind="column.attrs">
                <el-option
                  v-for="item in column.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </template>
            <template v-if="column.type === 'switch'">
              <el-switch v-model="modelValue[column.key]" v-bind="column.attrs"></el-switch>
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
import {computed, withDefaults} from "vue";
import {IQueryColumn} from "./interface";

interface IQueryProps {
  columns?: IQueryColumn[] | [],
  modelValue: Object,
  prevPlaceholder?: string
}

const props = withDefaults(defineProps<IQueryProps>(), {
  columns: () => [],
  modelValue: () => ({}),
  prevPlaceholder: '请输入'
})

const getPlaceholder = computed(() => {
  return (column: IQueryColumn) => {
    if(!column.attrs) column.attrs = {}
    return column.placeholder || column.attrs.placeholder || `${props.prevPlaceholder}${column.label || column.attrsFormItem.label || ''}`
  }
})
</script>

<style scoped lang="scss">

</style>
