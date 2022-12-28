import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import CUI from './../packages/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(CUI, {
    uploadUrl: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
})
app.mount('#app')

