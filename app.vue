<script setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
console.log(runtimeConfig, 'runtimeConfig')
console.log(appConfig, 'appConfig')

useState('counter', () => Math.round(Math.random() * 1000))
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
