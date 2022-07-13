import NotFound from '../pages/404.vue';
import MyHome from '../pages/index.vue';
import { createRouter, createWebHashHistory } from "vue-router";

// this works with the vite plugin to support file based routing
import routes from "~pages";

// const routes:  Array<, RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'MyHome',
//     component: MyHome,
 
//   },
//   {
//     path: '*',
//     name: 'NotFound',
//     component: NotFound,

//   }
// ]

//const routes: any = [];
const router = createRouter({
  history: createWebHashHistory(),
   // history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
