
import { getToken, setToken } from './cacheUtils';

const API_HOST = 'http://202.61.88.67:8080/api/interface-admin-service/commonAcceptDataOpenRest/commonAcceptDatas/00K1/11111Q00NY/V2.10/ou0gDaxdfsEalgEdMrPhRy9sspNgppFp/1';
const IS_DEV_EVN = true
// 正式地址
const API_HOST_PROD = 'http://202.61.88.67:8080/api/interface-admin-service/commonAcceptDataOpenRest/commonAcceptDatas/00K1/11111Q00NY/V2.10/XgHiAa1rTdCrwhutcrVqqqaoQawhcfmi/0';
// const IS_DEV_EVN = false

export const apiconfig = {
	dev: IS_DEV_EVN,
	BASE_API_WEB: IS_DEV_EVN?API_HOST:API_HOST_PROD,
	BASE_API_DEV: IS_DEV_EVN?API_HOST:API_HOST_PROD,
	BASE_API_PRO: API_HOST_PROD
}

export function imageCodeUrl(url) {
	let BASE_API = apiconfig.dev?apiconfig.BASE_API_DEV:apiconfig.BASE_API_PRO;
	return BASE_API + url;
}

export async function request(url, method, param,hideload,unlogin){
	let BASE_API = apiconfig.dev?apiconfig.BASE_API_DEV:apiconfig.BASE_API_PRO;
	let token = getToken();
	if(!hideload) {
		uni.showLoading({
			title: ''
		});
	}
	var [error, res] = await uni.request({
				url: BASE_API + url,
				method: method,
				data: param,
				dataType: 'json',
				header: {
					'token': token,
					'Accept': 'application/json',
					'Content-Type': 'application/json', //自定义请求头信息
				}
			});
	if(!hideload) {
		uni.hideLoading();
	}
	console.log(res);
	if(res && res.data) {
		var result = res.data;
		if(result && result.code == 0){
			if(res.header && res.header.token){
				setToken(res.header.token);
			}
			if(result.data || result.data === false || result.data === 0){
				return result.data;
			}
			return null;
		}else if(!unlogin && result && (result.code === 403 || result.code === 401)){
			uni.reLaunch({
			    url: '/pages/public/login'
			});
		}else{
			if(result && result.msg) {
				uni.showToast({
					title: result.msg || '',
					duration: 1500,
					mask: false,
					icon: 'none'
				});
			}
			return null;
		}
	}
	return null;
}

export async function upload(url, file) {
	let BASE_API = apiconfig.dev?apiconfig.BASE_API_DEV:apiconfig.BASE_API_PRO;
	let token = getToken();
	var [error, res] = await uni.uploadFile({
		url: BASE_API+url, 
		// file: file,
		name: 'file',
		filePath: file,
		header:{'token': token}
		// header:{"Content-Type": "multipart/form-data", 'token': token}
	});
	if(res && res.data) {
		var result = res.data;
		result = JSON.parse(result);
		if(result.code == 0){
			if(res.header && res.header.token){
				setToken(res.header.token);
			}
			if(result.data || result.data === false){
				return result.data;
			}
			return null;
		}else{
			return null;
		}
	}
	return null;
}
