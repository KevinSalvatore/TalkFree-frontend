import {
  SHOW_POP_UP,
  HIDE_POP_UP,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "./mutation-types";

export default {
  [SHOW_POP_UP](state) {
    state.showPopUp = true;
  },
  [HIDE_POP_UP](state) {
    state.showPopUp = false;
  },
  [SHOW_NOTIFICATION](state) {
    state.showNotification = true;
  },
  [HIDE_NOTIFICATION](state) {
    state.showNotification = false;
  }
};
