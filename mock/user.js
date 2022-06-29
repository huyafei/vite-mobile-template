/**
 * @name: user
 * @description：user.js
 * @date: 2022/1/17 17:27
 * @author: yf_hu
 */
const userInfo = {
  name: "huyafei",
};
const getUserInfoSuccess = {
  code: 200,
  message: "success",
  result: userInfo,
};
const getUserInfoError = {
  code: 99999,
  message: "身份过期",
};
const userApi = [
  {
    url: "/user/getUserInfo",
    type: "post",
    response: getUserInfoSuccess,
  },
  {
    url: "/user/userLogin",
    type: "post",
    response: {
      code: 200,
      message: "success",
      result: {
        token: "token123",
      },
    },
  },
];

export default userApi;
