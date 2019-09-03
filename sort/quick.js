/** 
 * 快速排序
 * 思想：找到元素排序后的正确位置
 * 
*/
const arr = require('./sort-arr');
const performance = require('./performance');

function swap(arr, i , j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function quick(arr, n) {
	_quick(arr, 0, n);
}
function _quick(arr, left, right) {
	if (left >= right) {
		return;
	}
	let v = index(arr, left, right);
	_quick(arr, left, v - 1);
	_quick(arr, v + 1, right);
}
/**
 * 单路循环
 * 标记最左侧的值为v
 * 标记一个j索引值
 * 从左到右依次循环标记为i
 * 使得j之前的都小于v, j+1之后的都大于v
 * 即[left + 1, j] < v > [j + 1, r]
 * 最后交换最左侧和j的数据，并返回j
 * @param {*} arr
 * @param {*} left
 * @param {*} right
 * @returns
 */
function index(arr, left, right) {
	let v = arr[left];
	// [left + 1, j] v, [j + 1, i)
	let j = left;
	for (let i = left + 1; i <= right; i++) {
		if (arr[i] < v) {
			j++;
			swap(arr, i, j);
		}
	}
	
	swap(arr, left, j);
	return j;
}
const arr1 = [...arr];
console.log('执行结果：', performance(quick, arr1, arr1.length));
console.log(arr1);