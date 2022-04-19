import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue';
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/antd.css';

createApp(App).use(store).use(router).use(ElementPlus).use(Antd).mount('#app')
