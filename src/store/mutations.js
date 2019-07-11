import {
  PUSH_NOTIFICATION,
  POP_NOTIFICATION
} from "./mutation-types";

export default {
  [PUSH_NOTIFICATION](state, details) {
    state.notifications.unshift(details);
  },
  [POP_NOTIFICATION](state) {
    state.notifications.pop();
  }
};
