import {App} from "vue";
import COperate from './src/index.vue'

export default {
  install(app: App) {
    app.component('c-operate', COperate)
  }
}
