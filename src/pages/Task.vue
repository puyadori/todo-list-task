<template>
  <div>
    <h1>TaskPage</h1>
    <div class="body">
      <div class="form">
        <input
          class="input"
          type="text"
          placeholder="type your todo list"
          @keyup.enter="$store.dispatch('sendInputValue', $event.target.value)"
          v-model="this.$store.state.input"
        />

        <div class="button-box">
          <button class="defult-btn" @click="toggleComplete(true)">
            complate all tasks
          </button>
          <button class="defult-btn" @click="toggleComplete(false)">
            clear complate
          </button>
        </div>

        <hr />

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
            <span v-bind:class="{ todoActiove: item.active }">{{
              item.value
            }}</span>
          </span>

          <button
            class="delete-tasks"
            @click="$store.dispatch('deleteItem', item.value)"
          >
            x
          </button>
        </div>

        <hr />

        <div class="bottom-button-box">
          <p class="left-counter">
            left : {{ $store.getters.getDeselectAllLenght }}
          </p>

          <div class="box-right">
            <p @click="setType(0)">All</p>
            <p @click="setType(1)">UnComplete</p>
            <p @click="setType(2)">Complete</p>
          </div>
        </div>
        {{ this.$store.getters.getnumber }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TaskPage",
  data() {
    return {
      message: "",
    };
  },

  computed: {},

  methods: {
    ...mapActions(["setType"]),

    showText(e) {
      this.message = e;
    },

    // toggleComplete(toggle) {
    //   const inputModel = this.$store.state.inputModel;
    //   for (let i in inputModel) {
    //     inputModel[i].active = toggle;
    //   }
    //   this.$store.dispatch("updateActiveArray", inputModel);
    // },

    changeRadio(index, value) {
      this.$store.dispatch("setActive", [index, value]);
    },
  },
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
}
.todoActiove {
  text-decoration: line-through;
}
.form {
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: #fff;
}
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
.defult-btn,
.left-counter {
  border: none !important;
  background-color: transparent;
  color: #a9a9a9 !important;
}
.defult-btn:hover {
  color: black !important;
}
.button-box {
  display: flex;
  justify-content: space-between;
}

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
.bottom-button-box {
  display: flex;
  justify-content: space-between;
}
.box-right {
  display: flex;
}
.box-right p {
  margin-right: 5px;
  color: #a9a9a9;
}
.box-right p:hover {
  color: black;
  cursor: pointer;
}
</style>
