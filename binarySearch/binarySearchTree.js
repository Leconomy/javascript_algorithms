/**
 * 二分搜索树
 * 特点：
 * 1、满足二叉树
 * 2、左节点 < 父节点 && 右节点 > 父节点
 * 3、以左右节点为跟的子树仍为一个二分搜索树
 * 4、不一定树完全二叉树
 * 
 * 前序遍历：先访问自身，再访问左右
 * 中序遍历：先访问左，再访问自身，最后访问右
 * 后续遍历：先访问左右，再访问自身
 */
class Node {
    constructor(key, value) {
        return {
            key,
            value,
            left: null,
            right: null
        };
    }
}
class BinarySearchTree {
    constructor() {
        // 节点个数
        this.count = 0;
        this.root = null;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    insert(key, value) {
        this.root = this._insert(this.root, key, value);
    }

    /**
     * 向以node为跟的二叉搜索树中插入节点(key, value)
     * 返回插入新节点后的二叉搜索树的跟
     * @param {*} node 
     * @param {*} key 
     * @param {*} value 
     */
    _insert(node, key, value) {
        if (node === null) {
            this.count++;
            return {key, value, left: null, right: null};
        }
        // 如果key相同，即插入的值已经在树中存在，则更新节点
        if (node.key === key) {
            node.value = value;
        }
        // 如果key<node.key则表示向左插入节点
        else if (key < node.key) {
            node.left = this._insert(node.left, key, value);
        } else {
            node.right = this._insert(node.right, key, value);
        }

        return node;
    }

    contain(key) {
        return this._contain(this.root, key);
    }

    _contain(node, key) {
        if (node === null) {
            return false;
        }
        if (node.key === key) {
            return true;
        }

        if (node.key > key) {
            return this._contain(node.left, key);
        }
        return this._contain(node.right, key);
    }

    search(key) {
        return this._search(this.root, key);
    }

    _search(node, key) {
        if (node === null) {
            return null;
        }
        if (node.key === key) {
            return node.value;
        }
        if (node.key > key) {
            return this._search(node.left, key);
        }

        return this._search(node.right, key);
    }
    /**
     * 前序遍历
     */
    preOrder() {
        this._preOrder(this.root);
    }

    _preOrder(node) {
        if (node !== null) {
            console.log(node.key);
            this._preOrder(node.left);
            this._preOrder(node.right);
        }
    }
    /**
     * 中序遍历
     */
    inOrder() {
        this._inOrder(this.root);
    }
    _inOrder(node) {
        if (node !== null) {
            this._inOrder(node.left);
            console.log(node.key);
            this._inOrder(node.right);
        }
    }
    /**
     * 后续遍历
     */
    postOrder() {
        this._postOrder(this.root);
    }
    _postOrder(node) {
        if (node !== null) {
            this._postOrder(node.left);
            this._postOrder(node.right);
            console.log(node.key);
        }
    }
    /**
     * 广度优先遍历
     */
    levelOrder() {
        let arr = [];
        if (this.root === null) {
            return;
        }
        arr.push(this.root);
        while(arr.length) {
            let first = arr.shift();
            console.log(first.key);
            if (first.left) {
                arr.push(first.left);
            }
            if (first.right) {
                arr.push(first.right);
            }
        }
    }

    min() {
        let node = this.root;
        while(node) {
            if (node.left === null) {
                return node.key;
            }
            node = node.left;
        }
    }

    max() {
        let node = this.root;
        while(node) {
            if (node.right === null) {
                return node.key;
            }
            node = node.right;
        }
    }
}
const arr = [28, 16, 30, 13, 22, 29, 42];
let binarySearchTree = new BinarySearchTree();
for (let i = 0, len = arr.length; i < len; i++) {
    binarySearchTree.insert(arr[i], arr[i]);
}
// console.log(binarySearchTree.root, binarySearchTree.count)

// console.log(binarySearchTree.contain(5))

// console.log(binarySearchTree.search(508))
// binarySearchTree.preOrder();

// binarySearchTree.levelOrder();
console.log(binarySearchTree.min());
console.log(binarySearchTree.max());


