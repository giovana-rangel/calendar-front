import { apiLaravel } from '@/config/axios/index.axios'

export default {
  namespaced: true,

  state: () => ({
    routes: [],
    reservations: [],
  }),

  actions: {
    async calendar_getRoutes({ commit }){
      try {
        const response = await apiLaravel.get('/routes')
        commit('calendar_SET_ROUTES', response.data)
        return Promise.resolve(response)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async calendar_getReservations({ commit }){
      try {
        const response = await apiLaravel.get('/reservations')
        commit('calendar_SET_RESERVATIONS', response.data)
        return Promise.resolve(response)
      } catch (error) {
        return Promise.reject(error)
      }
    },
  },

  mutations: {
    calendar_SET_ROUTES(state, data){
      state.routes = data
    },
    calendar_SET_RESERVATIONS(state, data){
      state.reservations = data
    },
  }
}