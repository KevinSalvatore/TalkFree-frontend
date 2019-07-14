import { UPDATE_USER_INFO } from "./mutation-types";

export default {
  [UPDATE_USER_INFO](state, userInfo) {
    state.username = userInfo.username;
    state.avatar = userInfo.avatar;
    state.gender = userInfo.gender;
    state.region = userInfo.region;
    state.slogan = userInfo.slogan;
  }
};
