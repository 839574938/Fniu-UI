## FniuUI 业务库

- 👍🏻 二次封装ElementUI
- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript Vite


### Getting Started
好的，如果您正在寻找让 FniuUI 变得更好的入门，您应该继续阅读。
对于使用 FniuUI 开发您的网站的开发人员，您应该继续访问[文档](https://839574938.github.io/Fniu-UI-Doc/)。

### 计划完成
- [✅] c-table组件
- [✅] c-tag组件
- [✅] c-operate组件
- [✅] c-query组件
- [进行中] c-upload组件
- [×] c-steps组件

### 安装此插件
安装可以通过几个简单的步骤完成。从您的仓库的根目录执行以下操作：
1. **NPM Install**
```bash
   npm i fniu-ui
```

> 请注意，这个插件确实有一些对等依赖；这是设计使然，旨在为最终用户提供更好的控制，请安装 `element-plus` `@element-plus/icons-vue` 

2. **完整引入**
```ts
// main.ts
import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import FniuUI from 'fniu-ui'
import 'fniu-ui/lib/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(FniuUI, {
    uploadUrl: '全局上传文件地址'
})
app.mount('#app')

```

3. **按需引入**
```ts
// main.ts
import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import CTable from "fniu-ui/packages/CTable";
import CStatus from "fniu-ui/packages/CStatus";
import COperate from "fniu-ui/packages/COperate";
import 'fniu-ui/lib/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(CTable)
app.use(CStatus)
app.use(COperate)
app.mount('#app')

```


