import {App} from 'vue'
import CUpload from './src/index.vue'
import {setGlobalConfig} from "../hook";

export default {
    install(app: App, options?: any) {
        app.component('c-upload', CUpload);

        options && setGlobalConfig(options)
    }
}
