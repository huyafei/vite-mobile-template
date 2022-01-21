/**
 * @name: index
 * @description：index.js
 * @date: 2022/1/17 17:27
 * @author: yf_hu
 */
import Mock from "mockjs";
import userApi from "./user";

const mocks = [...userApi];
// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: "200-600",
});


mocks.forEach((item) => {
  Mock.mock(new RegExp(item.url), item.type, item.response);
});
