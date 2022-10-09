import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import CUI from './../packages/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(CUI)
app.mount('#app')
