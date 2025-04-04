import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {VueQueryPlugin} from "@tanstack/vue-query";

import '@app/styles/index.css';
import App from '@app/App.vue';
import router from '@app/router';

const app = createApp(App);

app.use(createPinia());
app.use(VueQueryPlugin);
app.use(router);

app.mount('#app');
