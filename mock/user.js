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
  status: 200,
  message: "success",
  result: userInfo,
};
const getUserInfoError = {
  status: 99999,
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
      status: 200,
      message: "success",
      result: {
        token: "token123",
      },
    },
  },
];

export default userApi;
