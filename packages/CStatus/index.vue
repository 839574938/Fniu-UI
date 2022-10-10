<template>
  <div class="c-status">
    <el-tag v-bind="$attrs" :class="{
      'c-status-text': props.shape === 'text',
      'c-status-dot': props.shape === 'dot'
    }">
      <span class="dot" v-if="props.shape === 'dot'"></span>
      <slot></slot>
    </el-tag>
  </div>
</template>

<script lang="ts">
export default {
  name: "CStatus"
}
</script>

<script lang="ts" setup>
import {withDefaults} from "vue";

interface IStatusProps {
  shape?: 'tag' | 'dot' | 'text' | string,
  [propName: string]: any
}

const props = withDefaults(defineProps<IStatusProps>(), {
  shape: 'tag'
})
</script>

<style scoped lang="scss">
.c-status-text {
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
}

.c-status-dot{
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;

  .dot{
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
    margin-right: 4px;
    vertical-align: 1px;
  }
}
</style>
