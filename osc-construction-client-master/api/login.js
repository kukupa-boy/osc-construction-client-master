import { request } from '../utils/request'

const url = 'http://127.0.0.1:8080/loginNew.jspx';
const resourceCode = 'ZYZC2019112500000198';
const applyCode = 'YYSQ2019121000000327';
const client_id = '00K1';

export async function loginAuth(){
	var authUrl = 'http://202.61.88.67:8080/open-platform-exchange/exchange/getResource?resourceCode='+resourceCode+'&applyCode='+applyCode+'&sysCode=0003&response_type=code&client_id='+client_id+'&redirect_uri='+url+'&scope=oauth_info';
	return null;
}
