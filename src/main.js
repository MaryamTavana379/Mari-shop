import { createApp } from 'vue';
import './assets/style/main.scss';
import App from './App.vue';
import router from "./router";
import global from "@/global.js";

const app = createApp(App);
app.mixin(global);
app.use(router);
app.mount('#app');
