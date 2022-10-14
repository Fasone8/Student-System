import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import './assets/css/base.css'

import('bootstrap/dist/css/bootstrap.min.css')
//写不写括号都可以

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

