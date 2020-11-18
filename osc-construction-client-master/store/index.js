import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '@/Lang/index.js';
import { setUserInfo,removeToken,removeUserInfo,removeSysConfig } from '@/utils/cacheUtils';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		config: {},
		storeStatusBar: null
	},
	mutations: {
		cacheStatusBar(state, storeStatusBar) {
			state.storeStatusBar = storeStatusBar;
		},
		// 登录成功后，需要调用这个方法进行缓存
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider.user; // user对象
			state.config = provider.config; // 配置信息，比如关于我们，客户电话什么的
			setUserInfo(provider); // 设置整个provider对象的
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			removeUserInfo();
			removeToken();
			removeSysConfig();
		}
	},
	actions: {
	
	}
})

export default store
