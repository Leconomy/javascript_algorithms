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
	let [lt, gt] = index(arr, left, right);
	_quick(arr, left, lt);
	_quick(arr, gt, right);
}
/**
 * 三路排序
 * 标记最左侧的值为v
 * 标记一个左侧的索引值lt
 * 标记一个右侧的索引值gt
 * 标记一个从左到右循环的索引值e
 * 循环：
 * 如果arr[e] < v，则swap(arr, lt + 1, e) lt++ e++
 * 如果arr[e] > v，则swap(arr, gt - 1, e) gt-- e++
 * 使得最左侧到lt的值小于v, lt+1到gt-1的值都是等于v的，gt到最右侧的值都是大于v
 * 直到e > gt终止
 * 交互此时的lt和最左侧的值swap(arr, lt, left)
 * 最后返回lt
 * @param {*} arr
 * @param {*} left
 * @param {*} right
 * @returns
 */
function index(arr, left, right) {
	let v = arr[left];
	let lt = left;
	let gt = right + 1;
	let e = left + 1;
	// [left, lt] < v, [lt + 1, e) = v, [gt, right] > v
	while(e < gt) {
		if (arr[e] === v) {
			e++;
		} else if (arr[e] > v) {
			swap(arr, e, gt - 1);
			// 交互后arr[e]是没有处理过的数据，所以e的索引保持不动
			gt--;
		} else {
			swap(arr, e, lt + 1);
			lt++;
			e++;
		}
	}
	swap(arr, left, lt);
	return [lt, gt];
}
const arr1 = [...arr];
console.log('执行结果：', performance(quick, arr1, arr1.length - 1));
console.log(arr1);