import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primeicons/primeicons.css";
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config.js'
import '@formkit/themes/genesis'
import router from './router'

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(plugin, defaultConfig(config))
app.use(router)  

app.mount('#app');