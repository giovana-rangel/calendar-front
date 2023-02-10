import { createRouter, createWebHistory } from 'vue-router'

// import calendarRoutes from '@/modules/calendar/routes'

const routes = [
  {
    path: '/',
    component: () => import('@/modules/common/layouts/AppLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/modules/dashboard/views/DashBoard.vue'),
      },
      {
        path: 'transactions',
        name: 'Transactions',
        component: () => import('@/modules/calendar/views/CalendarIndex.vue'),
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: () => import('@/modules/calendar/views/CalendarIndex.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/modules/calendar/views/CalendarIndex.vue'),
      },
      {
        path: 'Settings',
        name: 'Settings',
        component: () => import('@/modules/calendar/views/CalendarIndex.vue'),
      },
      // Always leave this as last one,
      // but you can also remove it
      {
        path: '/:catchAll(.*)*',
        component: () => import('@/views/ErrorPage404.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router