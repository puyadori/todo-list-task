<template>
  <input placeholder="change Color" v-model="changeColor" />
</template>

<script>
export default {
  name: 'InputComponent',
  computed: {
    changeColor: {
      get() {
        return this.$store.state.changeColor
      },
      set(newValue) {
        this.$store.dispatch('changeColorAction', newValue)
      },
    },
  },
}
</script>
