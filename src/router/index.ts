
import {createRouter, createWebHistory} from 'vue-router'

import HomeComponet from "../components/Home.vue";

import InvenctoryList from "../components/Invenctory/InvenctoryList.vue";
import InvenctoryAdd from "../components/Invenctory/InvenctoryAdd.vue";
import InventoryEdit from "../components/Invenctory/InventoryEdit.vue";


import ProductAdd from "../components/Product/ProductAdd.vue";
import ProductList from "../components/Product/ProductList.vue";



const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponet,
        titulo: 'Home',
        meta: {
            title: 'Invenctory',
            isMenu: true
        },
    },
    {
        path: '/invenctory/:id',
        name: 'invenctory_list',
        component: InvenctoryList,
        meta: {
            isMenu: false
        },
    },
    {
        path: '/invenctory/:id/edit',
        name: 'invenctory_edit',
        component: InventoryEdit,
        meta: {
            isMenu: false
        },
    },
    {
        path: '/invenctory/add',
        name: 'invenctory_add',
        component: InvenctoryAdd,
        meta: {
            isMenu: false
        },
    },

    {
        path: '/product/add',
        name: 'product_add',
        component: ProductAdd,
        meta: {
            title: 'Product',
            isMenu: false
        },
    },
    {
        path: '/product',
        name: 'product_list',
        component: ProductList,
        meta: {
            title: 'Product',
            isMenu: true
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;