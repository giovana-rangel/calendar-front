<template>
<NavBar :pageTitle="'Schedules'"/>
<div class="grid">
  <div class="col-8">
    <div class="bg-white component box p-6">
      <div class="mb-4">
        <p for="icon">Seleccione Fecha</p>
        <CalendarInput
          inputId="icon" 
          class="p-inputtext-sm"
          v-model="inputDate" 
          :showIcon="true" 
        />
      </div>

      <DatePicker 
        v-model="date" 
        :attributes="attrs"
        is-expanded
        is-range 
        style="border:none"
        title-position="left"
      />
    </div>
  </div>
  <div class="col-4">
    <div class="bg-white px-5 py-3 component box">
      <h4>Rutas Disponibles</h4>
      <div v-for="route in routes" :key="route">
        <p 
          class="route-list px-3 py-2"
          @click="selectRoute(route)"
        >
          {{ route.title }}
        </p>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import NavBar from "@/modules/common/components/NavBar.vue";
import { DatePicker } from "v-calendar";
import { onMounted, ref } from "vue";
import { requestUtil } from '@/utils'
import { useCalendarStore } from "../composables/useCalendarStore";

const {
  routes,
  // reservations,
  calendar_getRoutes,
  calendar_getReservations,
} = useCalendarStore()

const inputDate = ref()
const attrs = ref([])

const date = ref([])

console.log(date)

// const routesMock = [
//   {
//     title: 'Route 1',
//     attrs: [
//       {
//         key: 'date1',
//         highlight: 'green',
//         dates: 'Sat Feb 11 2023 21:29:54 GMT-0300',
//       },
//       {
//         key: 'date2',
//         highlight: 'purple',
//         dates: 'Sat Feb 15 2023 21:29:54 GMT-0300',
//       },
//       {
//         key: 'date3',
//         highlight: 'gray',
//         dates: 'Sat Feb 22 2023 21:29:54 GMT-0300',
//       }
//     ]
//   },
//   {
//     title: 'Route 2',
//     attrs: [
//       {
//         key: 'date1',
//         highlight: 'green',
//         dates: 'Sat Feb 28 2023 21:29:54 GMT-0300',
//       },
//       {
//         key: 'date2',
//         highlight: 'purple',
//         dates: 'Sat Feb 3 2023 21:29:54 GMT-0300',
//       },
//       {
//         key: 'date3',
//         highlight: 'red',
//         dates: {
//           "start": "2023-02-17T01:11:52.669Z",
//           "end": "2023-02-20T01:11:52.669Z"
//         },
//       }
//     ]
//   }
// ]

function selectRoute(route){
  attrs.value = [
    {
      key: `${route.id}`,
      highlight: 'blue',
      dates: {
        start: new Date(route.start),
        end: new Date(route.end)
      }
    }
  ]
  console.log(attrs.value)
}

function init(){
  requestUtil({ action: calendar_getRoutes })
  requestUtil({ action: calendar_getReservations })
}

onMounted(() => {
  init()
})
</script>
<style scoped>
.box {
  height: 546px;
}
.route-list:hover{
  cursor: pointer;
  background: rgba(240, 240, 240, 0.87);
}
</style>