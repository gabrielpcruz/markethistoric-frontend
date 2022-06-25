import Home from "./components/home/Home";
import List from "./components/cadastro/List";

export default [
  {path: '/', component: Home, titulo: 'Home'},
  {path: '/list', name: 'list', component: List, titulo: 'List', props: true},
];
