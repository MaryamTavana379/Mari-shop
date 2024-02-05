import { createApp } from 'vue';
import './assets/style/main.scss';
import App from './App.vue';
import router from "./router";
import global from "@/global.js";
import axios from "axios";
import VueAxios from "vue-axios";
import 'vue-skeletor/dist/vue-skeletor.css';

const app = createApp(App);
app.mixin(global);
app.use(router);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.mount('#app');
