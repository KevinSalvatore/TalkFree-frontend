import axios from "axios";
import { storage } from "./storage.js";

const BASE_URL = "http://localhost:3000/API";

axios.interceptors.request.use(
  config => {
    var token = storage("session")("get")("token");
    if (token) {
      config.headers.Authorization = token;
    }
    console.log(config);
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

/**
 * @description 请求函数模块封装
 * @param {String} url 请求地址
 * @param {Object} data 传参
 * @param {String} type 请求方式
 */
export default function ajax(url, data = {}, type = "GET") {
  url = BASE_URL + url;
  return new Promise(function(resolve, reject) {
    let promise;
    if (type === "GET") {
      let dataStr = "";
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      promise = axios.get(url);
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then(function(response) {
        resolve({ data });
      })
      .catch(function(error) {
        reject(error);
      });
  });
}
