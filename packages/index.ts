import CTable from "./CTable/index.vue";
import COperate from "./COperate/index.vue"
import CStatus from './CStatus/index.vue'
import type {App} from 'vue'

const components = [
  CTable,
  COperate,
  CStatus
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
