
import {createRouter, createWebHistory} from 'vue-router'

import HomeComponet from "./../components/home/Home.vue";
import List from "../components/cadastro/List.vue";
// import Add from "../components/cadastro/Add";
// import Edit from "../components/cadastro/Edit";

const routes = [
    {path: '/', name: 'home', component: HomeComponet, titulo: 'Home'},
    {path: '/list', name: 'list', component: List, titulo: 'List', props: true},
    // {path: '/cadastrarLista', name: 'cadastrarLista', component: Add, titulo: 'Add', props: true},
    // {path: '/edit', name: 'edit', component: Edit, titulo: 'Edit', props: true},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;