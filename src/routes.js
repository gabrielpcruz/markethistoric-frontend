import Home from "./components/home/Home";
import List from "./components/cadastro/List";
import Add from "./components/cadastro/Add";
import Edit from "./components/cadastro/Edit";

export default [
  {path: '/', name: 'home', component: Home, titulo: 'Home'},
  {path: '/list', name: 'list', component: List, titulo: 'List', props: true},
  {path: '/cadastrarLista', name: 'cadastrarLista', component: Add, titulo: 'Add', props: true},
  {path: '/edit', name: 'edit', component: Edit, titulo: 'Edit', props: true},
];
