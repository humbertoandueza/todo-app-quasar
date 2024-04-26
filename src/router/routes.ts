import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/todo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/todo',
        name: 'todo',
        component: () => import('pages/TodosPage.vue'),
      },
      {
        path: '/dummy-post',
        name: 'dummy-post',
        component: () => import('pages/PostPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
