import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: '首頁' },
      },
      {
        path: 'calculator',
        name: 'calculator',
        component: () => import('@/views/CalculatorView.vue'),
        meta: { title: '預約試算' },
      },
      {
        path: 'showcase',
        name: 'showcase',
        component: () => import('@/views/ShowcaseView.vue'),
        meta: { title: '技術展示' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const title = to.meta.title ? `${to.meta.title} · NaturalBeauty` : 'NaturalBeauty'
  document.title = title
})

export default router
