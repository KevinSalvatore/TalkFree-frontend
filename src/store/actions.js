import {
  PUSH_NOTIFICATION,
  POP_NOTIFICATION
} from "./mutation-types";
import moment from "moment";

export default {
  newNotification({ commit }, details) {
    commit(PUSH_NOTIFICATION, {
      ...details,
      time: moment()
        .locale("zh-cn")
        .format("YYYY-MM-DD HH:mm:SSSS")
    });
    setTimeout(() => {
      commit(POP_NOTIFICATION);
    }, 3000);
  }
};
