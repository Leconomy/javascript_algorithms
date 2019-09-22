/**
 * 归并排序：自底向上
 * 
 */

const arr = require('./sort-arr');
const performance = require('./performance');

function merge(arr, len) {
    // 第一层循环用于分组即先2个一组，然后四个一组，八个一组
    // size即为1， 2， 4， 8
	for (let size = 1; size < len; size *= 2) {
        // 第二层循环对分组进行归并
        // 先归并[0, 1] [2, 3], [4, 5], [6,7]
        // 再归并[0, 1, 2, 3], [4, 5, 6, 7]
        for (let i = 0; i < len; i += size * 2) {
            __merge(arr, i, Math.min(len - 1, i + size - 1), Math.min(len - 1, i + size * 2 - 1));
        }
    }
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
		} else {
			arr[k] = aux[i - left];
			i++;
		}
	}
}

const arr1 = [...arr];
console.log('执行结果：', performance(merge, arr1, arr1.length), arr1);