<template>
  <input
    class="input"
    type="text"
    placeholder="type your todo list"
    @keyup.enter="$store.dispatch('sendInputValue', $event.target.value)"
    v-model="this.$store.state.input"
  />

  <div class="button-box">
    <button class="defult-btn" @click="$store.dispatch('updateActiveArray', true)">
      complate all tasks
    </button>
    <button class="defult-btn" @click="$store.dispatch('updateActiveArray', false)">
      clear complate
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderTask",
  methods: {
 
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #f2f2f2;
}

.button-box {
  display: flex;
  justify-content: space-between;
}

.defult-btn,
.left-counter {
  border: none !important;
  background-color: transparent;
  color: #a9a9a9 !important;
}

.defult-btn:hover {
  color: black !important;
}
</style>
