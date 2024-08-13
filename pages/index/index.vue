<script setup lang="ts">
// definePageMeta({
//   validate: async route => {
//     // 检查id是否由数字组成
//     return /^\d+$/.test(route.params.id as string)
//   }
// })

const title = ref('首页')

const proxyPerson = new Proxy(title,{
  // set 拦截器
  set(target,_key,value) {
    target.value = value
    return true
  }
})

proxyPerson.value = '我是首页'

useHead({
  title: title.value,
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

const year = getYear()

const counter = useState('counter')
</script>
<template>
  <div>
    {{ year }}
    {{ counter }}
  </div>
</template>

<style scoped></style>
