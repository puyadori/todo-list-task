<template>
  <h1 class="center">Home</h1>
  <div class="container">
    {{ $store.state.count }}

    <button @click="$store.dispatch('vorodiEzafeAction', 1)">+1</button>
    <button @click="$store.dispatch('vorodiKamAction', 1)">-1</button>

    <p :style="{ color: $store.state.changeColor }">* khodesh =></p>
    {{ $store.getters.getData }}

    <InputComponent />


  </div>
</template>

<script>
import InputComponent from './Input.vue'
export default {
  name: 'HomePage',
  components: {
    InputComponent,
  },

}
</script>

<style>
.center {
  text-align: center;
}
</style>
