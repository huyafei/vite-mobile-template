import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";



import vConsole from "vconsole";

import * as VenComponents from "./components";

import "./assets/styles/css/common.css";
import "./assets/styles/css/reset.css";
/**
 * less
 */
import "./assets/styles/less/index.less";

/**
 * vant
 */
import { Locale } from "vant";
import * as VantUiComponents from "./plugins/vant-ui";
import { getLanguage, i18n, messages } from "./lang";

const app = createApp(App);

Object.keys(VenComponents).forEach((VenComponentName) => {
  app.component(VenComponentName, VenComponents[VenComponentName]);
});
Object.keys(VantUiComponents).forEach((key) => {
  app.use(VantUiComponents[key]);
});

// 调接口可以去掉
if (import.meta.env.VITE_PROJECT_ENV === "development") {
  import("../mock");
}
// @ts-ignore
if (["dev", "uat"].includes(import.meta.env.VITE_PROJECT_ENV)) {
  app.config.globalProperties.$vConsole = new vConsole();
}

const language = getLanguage();
Locale.use(language, messages[language]);

app.use(router).use(store).use(i18n).mount("#app");
