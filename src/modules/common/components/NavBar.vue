<template>
<MenuBar>
  <template #start>
    <h2>{{ pageTitle }}</h2>
  </template>
  <template #end>
    <div class="p-inputgroup">
        <AppInput 
          v-model="search" 
          placeholder="Search" 
          type="text" 
          class="p-inputtext-sm border-round-3xl"
          style="border:none"
        />
      <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="ml-4"/>
    </div>
  </template>
</MenuBar>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { propTypes } from '../types';

defineProps({
  pageTitle: propTypes.string
})

const search = ref()
</script>