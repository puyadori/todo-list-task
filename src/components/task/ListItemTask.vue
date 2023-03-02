<template>

  <div

    v-for="(item, index) in $store.getters.getInput"

    :key="{ index }"

    class="tasks"

  >

    <span>

      <input

        type="checkbox"

        :checked="item.active"

        true-value="true"

        false-value="false"

        @change="changeRadio(index, !item.active)"

      />

      <span v-bind:class="{ todoActiove: item.active }">{{ item.value }}</span>

    </span>

    <button

      class="delete-tasks"

      @click="$store.dispatch('deleteItem', item.value)"

    >

      x

    </button>

  </div>

</template>


<script>

export default {

  name: "ListItemTask",

  methods: {

    changeRadio(index, value) {

      this.$store.dispatch("setActive", [index, value]);

    },

  },

};

</script>

<style scoped>

.tasks {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.tasks:hover {
  background-color: #f2f2f2;
  border-radius: 5px;
}

.delete-tasks {
  display: none;
  border: none;
  background-color: transparent;
}

.tasks:hover .delete-tasks {
  display: block;
}

.todoActiove {
  text-decoration: line-through;
}

</style>
