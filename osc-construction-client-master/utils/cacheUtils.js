

export function setToken(token) {
	uni.setStorage({
		key: 'constrConfig.token',
		data: token,
		success() {
			console.log('save token success');
		}
	});
}

export function getToken() {
	try {
		const value = uni.getStorageSync('constrConfig.token');
		return value;
	} catch (e) {
		return null;
	}
}

export function removeToken() {
	uni.removeStorage({
	    key: 'constrConfig.token'  
	});
}

export function setUserInfo(data) {
	uni.setStorage({
		key: 'constrConfig.userInfo',
		data: data,
		success() {
			console.log('save userInfo success');
		}
	});
}

export function getUserInfo() {
	try {
		const value = uni.getStorageSync('constrConfig.userInfo');
		return value;
	} catch (e) {
		return null;
	}
}

export function removeUserInfo() {
	uni.removeStorage({
	    key: 'constrConfig.userInfo'  
	});
}


export function setSysConfig(data) {
	uni.setStorage({
		key: 'constrConfig.sysConfig',
		data: data,
		success() {
			console.log('save sysconfig success');
		}
	});
}

export function getSysConfig() {
	try {
		const value = uni.getStorageSync('constrConfig.sysConfig');
		return value;
	} catch (e) {
		return null;
	}
}

export function removeSysConfig() {
	uni.removeStorage({
	    key: 'constrConfig.sysConfig'  
	});
}
