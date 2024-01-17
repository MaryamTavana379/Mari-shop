import { createApp } from 'vue';
import './assets/style/main.scss';
import App from './App.vue'
import global from "@/global.js";

createApp(App).mixin(global).mount('#app')
