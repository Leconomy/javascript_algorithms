/**
 * 归并排序
 * 思想：把数组一分为二，进行排序后合并；依此递归
 * 
 */
const arr = require('./sort-arr');
const performance = require('./performance');

function merge(arr, len) {
	_merge(arr, 0, len - 1);
}

function _merge(arr, left, right) {
	if (left >= right) {
		return;
	}
	let mid = Math.floor((left + right) / 2);
	_merge(arr, left, mid);
	_merge(arr, mid + 1, right);
	__merge(arr, left, mid, right);
}

function __merge(arr, left, mid, right) {
	let aux = [];
	for (let i = left; i <= right; i++) {
		aux[i-left] = arr[i];
	}

	let i = left;
	let j = mid + 1;
	for (let k = left; k <= right; k++) {
		if (i > mid) {
			arr[k] = aux[j - left];
			j++;
		} else if (j > right) {
			arr[k] = aux[i - left];
			i++;
		} else if (aux[i - left] > aux[j - left]) {
			arr[k] = aux[j - left];
			j++;
		} else if (aux[i - left] < aux[j - left]) {
			arr[k] = aux[i - left];
			i++;
		}
	}
}


const arr1 = [...arr];
console.log('执行结果：', performance(merge, arr1, arr1.length), arr1);
