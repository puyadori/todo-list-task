<template>

  <div class="bottom-button-box">

    <p class="left-counter">left : {{ $store.getters.getDeselectAllLenght }}</p>


    <div class="box-right">

      <p @click="setType(0)">All</p>

      <p @click="setType(1)">UnComplete</p>

      <p @click="setType(2)">Complete</p>

    </div>

  </div>

  {{ this.$store.getters.getnumber }}

</template>

<script>

import { mapActions } from "vuex";

export default {

  name: "BottomButton",

  methods: {

    ...mapActions(["setType"]),


    showText(e) {

      this.message = e;

    },

  },

};

</script>

<style scoped>

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
