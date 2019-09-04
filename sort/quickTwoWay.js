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
 * 双向循环
 * 标记最左侧的值为v
 * 标记一个从左向右遍历的索引值i
 * 标记一个从右向左遍历的索引值j
 * 从左向右循环若v > arr[i] 则i++直到遇到v < arr[i]停止
 * 从右向左循环若v < arr[j] 则j--直到遇到v > arr[j]停止
 * 交互此时的i,j值swap(arr, i, j)
 * 最后交换最左侧和j的数据，并返回j
 * @param {*} arr
 * @param {*} left
 * @param {*} right
 * @returns
 */
function index(arr, left, right) {
	let v = arr[left];
	let i = left + 1;
	let j = right;
	while(1) {
		while(i <= right && v >= arr[i]) {
			i++;
		}

		while(j > left && arr[j] > v) {
			j--
		}

		if (i > j) {
			break;
		}

		swap(arr, i, j);
		i++;
		j--;
	}
	
	swap(arr, left, j);
	return j;
}
const arr1 = [...arr];
console.log('执行结果：', performance(quick, arr1, arr1.length - 1));
console.log(arr1);