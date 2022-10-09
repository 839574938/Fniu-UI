<template>
  <div class="c-operate">
    <template v-if="type === 'overStep'">
      <el-button class="c-operate-item" v-for="(btn,index) in btnList.outsideList" :key="index" v-bind="btn" link
                 type="primary" @click="btn.onClick">
        {{ btn.name }}
      </el-button>
      <el-dropdown class="c-operate-item" v-if="btnList.insideList.length" @command="handleCommand">
        <el-button link type="primary">
          <span class="c-operate-more-text">更多</span>
          <el-icon>
            <ArrowDown/>
          </el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(insideBtn, index) in btnList.insideList" :key="index"
                              :disabled="insideBtn.disabled" :command="insideBtn">
              {{ insideBtn.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
    <template v-if="type === 'custom'">
      <template v-for="(item, index) in props.columns" :key="index">
        <el-dropdown v-if="item.children && Array.isArray(item.children)" class="c-operate-item"
                     :disabled="item.disabled" @command="handleCommand">
          <el-button link type="primary">
            <span class="c-operate-more-text">{{ item.name }}</span>
            <el-icon>
              <ArrowDown/>
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="(child, index) in item.children" :key="index" :disabled="child.disabled"
                                :command="child">
                {{ child.name }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button v-else @click="item.onClick" link type="primary" class="c-operate-item"
                   v-bind="item">
          {{ item.name }}
        </el-button>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'COperate',
}
</script>
<script lang="ts" setup>
import {computed} from "vue";
import {IOperateColumns} from "./interface";
import {ArrowDown} from '@element-plus/icons-vue'


interface IOperateProps {
  columns?: IOperateColumns[] | [],
  type?: 'overStep' | 'custom' | null,
  overStepCount?: number,
}

const props = withDefaults(defineProps<IOperateProps>(), {
  columns: () => [],
  type: 'overStep',
  overStepCount: 3,
})

const btnList = computed(() => {
  let outsideList: IOperateColumns[] = []
  let insideList: IOperateColumns[] = []
  const listLength = props.columns.length
  if (listLength > props.overStepCount) {
    outsideList = props.columns.slice(0, props.overStepCount - 1)
    insideList = props.columns.slice(props.overStepCount - 1, listLength)
  } else {
    outsideList = props.columns
  }
  return {outsideList, insideList}
})

const handleCommand = (command: IOperateColumns) => {
  command.onClick && command.onClick()
}
</script>

<style scoped lang="scss">
.el-button {
  margin: 0;
}

.c-operate {
  display: flex;
  align-items: center;

  .c-operate-item {
    margin-right: 16px;

    .c-operate-more-text {
      margin-right: 4px;
    }
  }
}
</style>
