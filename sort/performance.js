function performance(fn, arr, len) {
	console.time('执行');
	const rtnArr = fn.call(null, arr, len);
	console.timeEnd('执行')
	return rtnArr;
}

module.exports = performance;