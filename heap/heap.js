
 /** 
  * 最大堆的特点
  * 1、堆中某个节点的值总是不大于其父节点的值
  * 2、堆总是一颗完全二叉树
  * 
  * 用数组存储二叉堆：
  * 左节点的索引都是父节点的2倍
  * 右节点的索引都是父节点的2倍加1
  * parent(i) = i / 2
  * left child (i) = 2 * i
  * right child (i) = 2 * i + 1
  */
function swap(arr, i , j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
module.exports = class MaxHeap {
    constructor(capacity) {
        // 存储空间
        this.heap = new Array(capacity + 1);
        // 元素个数
        this.count = 0;
    }
    /**
     * 元素个数
     */
    size() {
        return this.count;
    }

    /**
     * 是否为空
     */
    isEmpty() {
        return this.count === 0;
    }
    /**
     * 向已有的最大堆中插入元素
     * @param {number} item 插入的元素
     */
    insert(item) {
        this.heap[++this.count] = item;
        // 把插入的元素up到合适的位置，已达到满足最大堆的特点
        this.shiftUp();
    }

    /**
     * 把插入的元素up到合适的位置，已达到满足最大堆的特点
     */
    shiftUp() {
        let count = this.count;
        // 存储是从索引1开始，所以this.count > 1 
        // 如果此时插入的元素比其父节点大，则交互彼此
        while(count > 1 && this.heap[(count / 2) >> 0] < this.heap[count]) {
            swap(this.heap, (count / 2) >> 0, count);
            count = (count / 2) >> 0;
        }
    }

    /**
     * 取出最大值即数组的第一项
     */
    extractMax() {
        if (this.count < 1) {
            throw Error('堆中无数据');
        }

        let ret = this.heap[1];
        // 交换第一项和最后一项
        swap(this.heap, 1, this.count);
        this.heap[this.count] = undefined;
        // count值向前移动一位
        this.count--;
        // 为第一项找到合适的位置
        this.shiftDown(1);
        return ret;
    }

    shiftDown(k) {
        // let left = 2 * k;
        // let right = 2 * k + 1;
        // if (right > this.count) {
        //     return;
        // }
        // // 如果考察大节点比左侧或右侧其中任意一个大，都需要交换
        // if (this.heap[right] > this.heap[k] || this.heap[left] > this.heap[k]) {
        //     // 左侧大 与左侧交换
        //     if (this.heap[left] > this.heap[right]) {
        //         swap(this.heap, left, k);
        //         this.shiftDown(left);
        //     } else {
        //         swap(this.heap, right, k);
        //         this.shiftDown(right);
        //     }
        // }
        while(2 * k <= this.count) {
            // k与j即将交换
            let j = 2 * k;
            // 有右侧节点且右侧节点比左节点大
            if (this.count >= j + 1 && this.heap[j + 1] > this.heap[j]) {
                j++;
            }
            if (this.heap[k] > this.heap[j]) {
                break;
            }
            swap(this.heap, k, j);
            k = j;
        }
    }
}

