import {
  UPDATE_USERNAME,
  UPDATE_AVATAR,
  UPDATE_GENDER,
  UPDATE_REGION,
  UPDATE_SLOGAN,
  SET_USER_INFO
} from "./mutation-types";

export default {
  //这里不会对信息进行数据库判断，只对数据库做读取和更改的操作
  //比如这里是不会判断更改的名字是否与数据库中的名字重合的
  // updateUsername({ commit }, username) {

  // }
  setUserInfo({ commit }, userInfo) {
    commit(SET_USER_INFO, userInfo);
  }
};
