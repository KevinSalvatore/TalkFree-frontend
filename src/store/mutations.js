import {
  SHOW_POP_UP,
  HIDE_POP_UP,
  PUSH_NOTIFICATION,
  POP_NOTIFICATION
} from "./mutation-types";

export default {
  [SHOW_POP_UP](state) {
    state.showPopUp = true;
  },
  [HIDE_POP_UP](state) {
    state.showPopUp = false;
  },
  [PUSH_NOTIFICATION](state, details) {
    state.notifications.unshift(details);
  },
  [POP_NOTIFICATION](state) {
    state.notifications.pop();
  }
};
