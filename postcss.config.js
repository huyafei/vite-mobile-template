/**
 * @name: postcss-pxtorem
 * @description：postcss-pxtorem.ts
 * @date: 2022/1/6 15:59
 * @author: yf_hu
 */

module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
      unitPrecision: 5,
    },
  },
};
