import { SHOW_POP_UP, HIDE_POP_UP } from "./mutation-types";

export default {
  [SHOW_POP_UP](state) {
    state.showPopUp = true;
  },
  [HIDE_POP_UP](state) {
    state.showPopUp = false;
  }
};
