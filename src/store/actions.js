import {
  SHOW_POP_UP,
  HIDE_POP_UP,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "./mutation-types";

export default {
  showPopUP({ commit }) {
    commit(SHOW_POP_UP);
  },
  hidePopUP({ commit }) {
    commit(HIDE_POP_UP);
  },
  showNotification({ commit }) {
    commit(SHOW_NOTIFICATION);
  },
  hideNotification({ commit }) {
    commit(HIDE_NOTIFICATION);
  },
  notificationContral({ commit, state }) {
    if (state.showNotification) {
      commit(HIDE_NOTIFICATION);
    } else {
      commit(SHOW_NOTIFICATION);
    }
  }
};
