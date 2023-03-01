<template>
  <headerPage />
  <router-view></router-view>
</template>

<script>
import headerPage from './components/section/Header.vue'

export default {
  name: 'App',

  components: {
    headerPage,
  },
}
</script>

<style></style>
