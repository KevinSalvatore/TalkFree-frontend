import {
  UPDATE_USERNAME,
  UPDATE_AVATAR,
  UPDATE_GENDER,
  UPDATE_REGION,
  UPDATE_SLOGAN,
  SET_USER_INFO
} from "./mutation-types";

export default {
  [UPDATE_USERNAME](state, username) {
    state.username = username;
  },
  [UPDATE_AVATAR]() {},
  [UPDATE_GENDER]() {},
  [UPDATE_REGION]() {},
  [UPDATE_SLOGAN]() {},
  [SET_USER_INFO](state, userInfo) {
    (state.username = userInfo.username),
      (state.avatar = userInfo.avatar),
      (state.gender = userInfo.gender),
      (state.region = userInfo.region),
      (state.slogan = userInfo.slogan);
  }
};
