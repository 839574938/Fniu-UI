import CTable from "./CTable/src/index.vue";
import COperate from "./COperate/src/index.vue"
import CStatus from './CStatus/src/index.vue'
import CQuery from "./CQuery/src/index.vue";
import type {App} from 'vue'

const components = [
  CTable,
  COperate,
  CStatus,
  CQuery
]

const INSTALLED_KEY = Symbol('INSTALLED_KEY')
const install = (app: App) => {
  // @ts-ignore
  if (app[INSTALLED_KEY]) return
  // @ts-ignore
  app[INSTALLED_KEY] = true
  components.forEach((component) => app.component(component.name, component))
}

export default {
  install,
  ...components
}
