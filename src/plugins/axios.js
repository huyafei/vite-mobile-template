import axios from "axios";
import {Dialog, Toast} from "vant";
import Cookies from "./cookie";
import router from "../router";

axios.defaults.baseURL = import.meta.env.VITE_PROJECT_API_baseURL;

// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
// 超时时间 10s
axios.defaults.timeout = 10000;

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 全局加token
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const res = response.data;
    if (res.status === 99999) {
      Toast.fail("请登录");
      router.push({
        name: "Login",
        query: {
          redirect: router.currentRoute.value.fullPath,
        },
      });
      return Promise.reject("error");
    }
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    Dialog.alert({
      title: "警告",
      message: "登录连接超时",
    });
    return Promise.reject(error);
  }
);
export default axios;
