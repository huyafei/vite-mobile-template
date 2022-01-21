/**
 * @name: index
 * @description：index.js
 * @date: 2022/1/17 17:29
 * @author: yf_hu
 */
import axios from "../plugins/axios";

export function userLogin(data) {
  return axios({
    url: `/user/userLogin`,
    method: "post",
    data,
  });
}

export function getUserInfoApi() {
  return axios({
    url: `/user/getUserInfo`,
    method: "post",
  });
}
