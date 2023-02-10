export default {
  path: 'calendar',
  component: () => import('@/modules/calendar/views/CalendarIndex.vue'),
  children: [
    {
      path: '',
      redirect: {
        name: 'Inicio'
      }
    }
  ]
}