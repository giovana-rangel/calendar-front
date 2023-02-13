import { createStore } from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import calendar from '@/modules/calendar/store/calendar'

const store = createStore({
  modules: {
    calendar
  },
  plugins: [createPersistedState({ key: process.env.VUE_APP_STORE_KEY })]
})

export default store