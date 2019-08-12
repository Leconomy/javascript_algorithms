/**
 * 冒泡排序
 * 思想：从数组第一个开始，逐次进行比较，把大的数据向后移动
 * 嵌套循环：
 * 外层循环：从第一个开始，逐次移动待排序的数
 * 内存循环：从第一个开始，逐次比较当前的值与外层循环的值大小，大的就向后移动
 */
const arr = require('./sort-arr');
const performance = require('./performance');

function swap(arr, i , j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function bubble(arr, len) {
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}

const arr1 = [...arr];
console.log('执行结果：', performance(bubble, arr1, arr1.length));


function bubble2(arr, len) {
	for (let i = 0; i < len; i++) {
		let flag = false;
		for (let j = 0; j < len - i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				flag = true;
			}
		}
		if (!flag) {
			return arr;
		}
	}
	return arr;
}

const arr2 = [...arr];
console.log('执行结果：', performance(bubble2, arr2, arr2.length));