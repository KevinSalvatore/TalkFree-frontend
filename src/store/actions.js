import {
  SHOW_POP_UP,
  HIDE_POP_UP,
  PUSH_NOTIFICATION,
  POP_NOTIFICATION
} from "./mutation-types";
import moment from "moment";

export default {
  showPopUP({ commit }) {
    commit(SHOW_POP_UP);
  },
  hidePopUP({ commit }) {
    commit(HIDE_POP_UP);
  },
  newNotification({ commit }, details) {
    commit(PUSH_NOTIFICATION, {
      ...details,
      time: moment()
        .locale("zh-cn")
        .format("YYYY-MM-DD HH:mm:SSSS")
    });
    setTimeout(() => {
      commit(POP_NOTIFICATION);
    }, 1500);
  }
};
