import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index';

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App);

app.use(BootstrapVue3)
app.use(VueSweetalert2);
app.use(router);
app.use(VueAxios, axios)

app.mount('#app')
