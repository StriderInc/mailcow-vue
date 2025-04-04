import { createRouter, createWebHistory } from 'vue-router';

import { MailManagerPage } from '@pages/mail-manager';
import { NotFoundPage } from '@pages/not-found';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: '/mail-manager',
    },
    {
      path: '/mail-manager',
      name: 'TaskListPage',
      component: async () => MailManagerPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: async () => NotFoundPage,
    },
  ],
});

export default router;
