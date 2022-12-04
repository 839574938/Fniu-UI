<template>
  <el-form class="c-query" :model="modelValue" v-bind="$attrs">
    <el-row>
      <el-col v-for="(column, index) in props.columns" :key="index" v-bind="column.attrsCol">
        <slot :name="column.key">
          <template v-if="column.type === 'input'">
            <el-form-item :label="column.label" v-bind="column.attrsFormItem">
              <el-input v-model="modelValue[column.key]" :placeholder="getPlaceholder(column)" v-bind="column.attrs"/>
            </el-form-item>
          </template>
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
    return column.placeholder || column.attrs.placeholder || `${props.prevPlaceholder}${column.label || column.attrsFormItem.label || ''}`
  }
})
</script>

<style scoped lang="scss">

</style>
