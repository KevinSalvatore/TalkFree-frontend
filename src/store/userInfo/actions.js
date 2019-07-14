import { UPDATE_USER_INFO } from "./mutation-types";

export default {
  updateUserInfo({ commit }, userInfo) {
    commit(UPDATE_USER_INFO, userInfo);
  }
};
