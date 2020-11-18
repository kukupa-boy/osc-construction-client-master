import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh.js'
import en from './en.js'

Vue.use(VueI18n)

const messages = {
	zh: {
	  ...zh
	},
	en: {
	  ...en
	}
}

const i18n = new VueI18n({  
  locale: 'zh',
  messages: messages
})

export default i18n