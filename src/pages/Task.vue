<template>
  <div>
    <h1>TaskPage</h1>

    <div class="body">
      <div class="form">
        <InputTask />

        <hr />

        <ListItemTask />

        <hr />

        <BottomButton />
      </div>
    </div>
  </div>
</template>

<script>
import InputTask from "@/components/task/HeaderTask.vue";

import ListItemTask from "@/components/task/ListItemTask.vue";

import BottomButton from "@/components/task/BottomButton.vue";

export default {
  name: "TaskPage",

  components: {
    InputTask,
    ListItemTask,
    BottomButton,
  },

  data() {
    return {
      message: "",
    };
  },

  computed: {},

  methods: {},
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
}

.form {
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: #fff;
}
</style>
