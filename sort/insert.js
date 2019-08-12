/**
 * 插入排序
 * 思想：从第二个元素开始，与前面已经排好序的每个元素进行对比，插入到合适的位置
 * 嵌套循环：
 * 外层循环，从第二个元素开始进行遍历，记录待排序的元素
 * 内存循环：从外层循环下标的前一个开始遍历，直到数组第一项，比较外层循环当前的值，
 * 插入到合适位置
 */
const arr = require('./sort-arr');
const performance = require('./performance');


function swap(arr, i , j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function insert(arr, len) {
	for (let i = 1; i < len; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j - 1] > arr[j]) {
				swap(arr, j - 1, j);
			}
		}
	}
	return arr;
}

const arr1 = [...arr];
console.log('执行结果：', performance(insert, arr1, arr1.length));


function insert1(arr, len) {
	for (let i = 1; i < len; i++) {
		let temp = arr[i];
		let j = i;
		for (; j > 0; j--) {
			if (arr[j - 1] > temp) {
				arr[j] = arr[j - 1];
			} else {
				break;
			}
		}
		arr[j] = temp;
	}
	return arr;
}

const arr2 = [...arr];
console.log('执行结果：', performance(insert1, arr2, arr2.length));
