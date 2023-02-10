<template>
<main class="grid col-12 container">
  <div class="col-3">
    <div class="sidebar-panel pt-8 m-4">
      <div class="">
        <PanelMenu 
          class="text-white col-12 ml-4"
          style="background: none; border: none;"
          :model="items" 
        />
        <div class="link-group ml-6">
          <p class="link text-xs">Help</p>
          <p class="link text-xs">Contact Us</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-9">
    <RouterView />
  </div>
</main>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const items = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'pi pi-th-large',
    command: () => {
      router.push({ name: 'Dashboard'})
    }
  },
  {
    label: 'Transactions',
    icon: 'pi pi-chart-line',
    command: () => {
      router.push({ name: 'Transactions'})
    }
  },
  {
    label: 'Schedules',
    icon: 'pi pi-calendar',
    command: () => {
      router.push({ name: 'Calendar'})
    }
  },
  {
    label: 'Users',
    icon: 'pi pi-users',
    command: () => {
      router.push({ name: 'Users'})
    }
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    command: () => {
      router.push({ name: 'Settings'})
    }
  },
]
</script>

<style>
.container {
  height: 100vh;
}
.sidebar-panel{
  height: 90%;
  width: 280px;
  background: #519BD0;
  border-radius: 30px;
}

.component{
  border-radius: 30px;
}

.link-group{
  margin-top: 14rem;
}

.link:hover{
  cursor: pointer;
  color: #FFF;
}
</style>