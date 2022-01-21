/**
 * @name: index
 * @description：index.js
 * @date: 2022/1/20 14:19
 * @author: yf_hu
 */
import {createI18n} from 'vue-i18n'
import Cookies from "@/plugins/cookie"

import enUS from 'vant/es/locale/lang/en-US';
import zhCN from 'vant/es/locale/lang/zh-CN';

import enLocale from './en-US'
import zhLocale from './zh-CN'

export const messages = {
  'en-US': {
    ...enUS,
    ...enLocale,
  },
  'zh-CN': {
    ...zhCN,
    ...zhLocale,
  }

}
export const getLanguage = () => {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage
  const language = navigator.language || navigator.browserLanguage
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh-CN'
}
export const i18n = createI18n({
  locale: getLanguage(),
  fallbackLocale: 'zh-CN',
  globalInjection: true,
  legacy: false,
  messages,
})
export default {getLanguage, i18n}
