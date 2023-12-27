import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/styles/app.css';
import router from './router/router'
createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
