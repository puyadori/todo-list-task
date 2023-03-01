/* eslint-disable no-debugger  */

import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,

      changeColor: "blue",

      inputModel: [],

      input: "",

      type: 0,
    };
  },

  mutations: {
    // commit
    azafeKardan(state, value) {
      state.count += value;
    },
    kamKardan(state, value) {
      state.count -= value;
    },
    changeColorMution(state, value) {
      state.changeColor = value;
    },
    chapInputMute(state, value) {
      const data = { active: false, value: value };
      const index = state.inputModel.findIndex((x) => x.value === data.value);
      if (index == -1) {
        state.input = "";
        state.inputModel.push(data);
      }
    },
    deleteItem(state, data) {
      state.inputModel.splice(data, 1);
    },

    SET_TYPE(state, payload) {
      state.type = payload;
    },

    SET_ACTIVE(state, [index, payload]) {
      state.inputModel[index].active = payload;
    },
  },

  actions: {
    vorodiEzafeAction({ commit }, vorodi) {
      commit("azafeKardan", vorodi);
      console.log(vorodi);
    },
    vorodiKamAction({ commit }, vorodi) {
      commit("kamKardan", vorodi);
    },
    changeColorAction({ commit }, colorValueInput) {
      commit("changeColorMution", colorValueInput);
    },
    sendInputValue({ commit }, event) {
      commit("chapInputMute", event);
    },
    deleteItem({ commit }, event) {
      commit("deleteItem", event);
    },
    setType({ commit }, payload) {
      commit("SET_TYPE", payload);
    },
    setActive({ commit }, [index, value]) {
      commit("SET_ACTIVE", [index, value]);
    },
  },

  getters: {
    getData(state) {
      return state.count * state.count;
    },
    getInput(state) {
      if (!state.type) {
        return state.inputModel;
      }

      return state.inputModel.filter((i) =>
        state.type === 1 ? !i.active : i.active
      );
    },
    getDeselectAllLenght(state) {
      const deta = state.inputModel.filter((x) => !x.active);
      return deta.length;
    },
  },
});

export default store;
