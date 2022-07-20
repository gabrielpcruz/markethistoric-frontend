
import {createRouter, createWebHistory} from 'vue-router'

import HomeComponet from "./../components/home/Home.vue";
import ListComponent from "./../components/cadastro/ListComponent.vue";
import AddComponent from "./../components/cadastro/AddComponent.vue";
import EditComponent from "./../components/cadastro/EditComponent.vue";

const routes = [
    {path: '/', name: 'home', component: HomeComponet, titulo: 'Home'},
    {path: '/list', name: 'list', component: ListComponent, titulo: 'List', props: true},
    {path: '/cadastrarLista', name: 'cadastrarLista', component: AddComponent, titulo: 'Add', props: true},
    {path: '/edit', name: 'edit', component: EditComponent, titulo: 'EditComponent', props: true},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;