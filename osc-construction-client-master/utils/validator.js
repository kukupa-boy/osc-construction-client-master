
/**
 * 验证整数
 * @param {Object} number
 */
export function validateNumber(number) {
	var reg = /^[0-9]*[0-9][0-9]*$/;
	return reg.test(number);
}
