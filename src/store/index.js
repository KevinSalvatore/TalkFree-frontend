import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import state from "./state";
import userInfo from "./modules/userInfo";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  mutations,
  actions,
  getters,
  state,
  modules: { userInfo }
});
