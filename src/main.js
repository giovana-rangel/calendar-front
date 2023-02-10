import { createApp } from 'vue'

// vue extensions
import App from './App.vue'
import router from './router'
import store from './store'

// PrimeVue css
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// PrimeVue Components
import PrimeVue from 'primevue/config'
import PanelMenu from 'primevue/menu';
import Listbox from 'primevue/listbox';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';

// V-Calendar component
import 'v-calendar/dist/style.css';
import { SetupCalendar, DatePicker } from 'v-calendar';

/**
 * [VUE INSTANCE]
 */
const app = createApp(App)

// vue config
app.use(store)
app.use(router)
app.use(PrimeVue)
app.use(SetupCalendar, {})

// PrimeVue global components
app.component('PanelMenu', PanelMenu)
app.component('ListBox', Listbox)
app.component('CalendarInput', Calendar)
app.component('DatePicker', DatePicker)
app.component('AppInput', InputText)
app.component('MenuBar', Menubar)

app.mount('#app')