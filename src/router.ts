import { createRouter, createWebHashHistory } from 'vue-router'

import index from "./views/index.vue"

const routes = [
    {
      path: "/",
      name: "/",
      component: async () => index
      // redirect: '/terraformIndex/keyconfig',
    }
  ]

const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  // 采用 history 模式
  // history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
