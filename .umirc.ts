import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      title: 'reduxDemo',
      routes: [
        {
          path: '/counter',
          title: '加减计数器',
          component: '@/pages/counter/index',
        },
        { path: '/lazy', title: 'lazy', component: '@/pages/lazy/index' },
      ],
    },
  ],
  fastRefresh: {},
});
