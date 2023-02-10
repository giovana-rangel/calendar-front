<template>
<RouterView v-slot="{ Component }">
  <Transition name="nested">
    <Suspense
      v-if="Component"
      timeout="0"
    >
      <template #default>
        <Component :is="Component" />
      </template>
      <template #fallback>
        <AppBanner />
      </template>
    </Suspense>
  </Transition>
</RouterView>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #E5E5E5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
