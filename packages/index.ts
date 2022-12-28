import CTable from "./CTable/src/index.vue";
import COperate from "./COperate/src/index.vue"
import CStatus from './CStatus/src/index.vue'
import CQuery from "./CQuery/src/index.vue";
import CUpload from './CUpload/src/index.vue'
import type {App} from 'vue'
import {setGlobalConfig} from "./hook";

const components = [
  CTable,
  COperate,
  CStatus,
  CQuery,
  CUpload
]

const INSTALLED_KEY = Symbol('INSTALLED_KEY')
const install = (app: App, options?: any) => {
  // @ts-ignore
  if (app[INSTALLED_KEY]) return

  // @ts-ignore
  app[INSTALLED_KEY] = true
  components.forEach((component) => app.component(component.name, component))

  if (options) setGlobalConfig(options);
}

export default {
  install,
  ...components
}
