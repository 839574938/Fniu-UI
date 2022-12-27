import {App} from 'vue'
import CUpload from './src/index.vue'

export default {
    install(app: App) {
        app.component('c-upload', CUpload);
    }
}
