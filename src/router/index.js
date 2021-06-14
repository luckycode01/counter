import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/shownum',
          name: 'shownum',
          component: () => import('../components/showNum.vue'),
        },
      ],
    },
  ],
});
export default router;
