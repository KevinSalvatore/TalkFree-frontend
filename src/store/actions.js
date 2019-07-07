import { SHOW_POP_UP, HIDE_POP_UP } from "./mutation-types";

export default {
  showPopUP({ commit }) {
    commit(SHOW_POP_UP);
  },
  hidePopUP({ commit }) {
    commit(HIDE_POP_UP);
  }
};
