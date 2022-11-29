import {App} from "vue";
import CStatus from './src/index.vue';
export default {
  install(app: App) {
    app.component('c-status', CStatus)
  }
}
