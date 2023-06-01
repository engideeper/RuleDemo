import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Index from "./index.vue";
import "./index.css";


const app = createApp(Index)
// 注册element Icons组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  app.use(router).use(ElementPlus).mount('#app')