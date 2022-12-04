import {App} from "vue";
import CQuery from './src/index.vue'


export default {
  install(app: App) {
    app.component('c-query', CQuery)
  }
}
