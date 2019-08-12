/**
 * 选择排序
 * 思想：从开头遍历，取出最小元素，之后放在数组开头
 * 嵌套循环：
 * 外层循环，从数组第一个开始遍历到倒数第二个元素，用于记录当前最小元素的位置
 * 内层循环，从第二个元素开始遍历到最后一个元素，查找比当前外循环所指向的元素小的元素，
 * 完成后与外层循环当前的值或下标进行交换
 */
const arr = require('./sort-arr');
const performance = require('./performance');


function swap(arr, i , j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function section(arr, len) {
	for (let i = 0; i < len - 1; i++) {
		let min = arr[i];
		for (let j = i + 1; j < len; j++) {
			if (min > arr[j]) {
				let temp = min;
				min = arr[j];
				arr[j] = temp;
			}
		}
		arr[i] = min;
	}
	return arr;
}
const arr1 = [...arr];
console.log('执行结果：', performance(section, arr1, arr1.length));


function section1(arr, len) {
	for (let i = 0; i < len - 1; i++) {
		let min = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		swap(arr, min, i);
	}
	return arr;
}

const arr2 = [...arr];
console.log('执行结果：', performance(section1, arr2, arr2.length));

