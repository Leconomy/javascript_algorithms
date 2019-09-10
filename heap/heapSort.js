const arr = require('./arr');
const MaxHeap = require('./heap');
const heap = new MaxHeap(arr.length - 1);

function sort(arr) {
    // 先插入到最大堆中
    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i]);
    }
    // 倒叙取出最大堆中到数据
    for (let i = arr.length - 1; i >= 0; i--) {
        // 每次返回都是堆中最大堆数据，从而达到从小到大的排序
        arr[i] = heap.extractMax();
    }
    return arr;
}

console.log(sort([...arr]));

