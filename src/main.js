import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from "vue-router";
import routes from "./routes";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:8081';

Vue.use(VueRouter);


Vue.use(BootstrapVue)

const router = new VueRouter({
    routes,
    mode: "history"
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
