import {App} from "vue";
import CTable from  './src/index.vue'
export default {
  install(app: App) {
    app.component('c-table', CTable)
  }
}
