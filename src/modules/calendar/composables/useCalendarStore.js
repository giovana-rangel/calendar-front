import { computed } from 'vue'
import { useStore } from 'vuex'

export const useCalendarStore = () => {
  const { state, dispatch } = useStore()

  return {
    routes: computed(() => state.calendar.routes),
    reservations: computed(() => state.calendar.reservations),

    calendar_getRoutes: () => dispatch('calendar/calendar_getRoutes'),
    calendar_getReservations: () => dispatch('calendar/calendar_getReservations'),
  }
}