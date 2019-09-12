/**
 * 使用一个size，里面保存每个并集到个数，当合并集合当时候
 * 尽量保持集合当长度最小
 * 也即把长当集合当跟指针指向集合短的跟指针，这样每次find的时候遍历就少了
 */
class QuickUnion {
    constructor(count) {
        this.count = count;
        this.parent = [];
        // 并集元素个数
        this.size = [];
        for (let i = 0; i < count; i++) {
            this.parent[i] = i;
            // 开始每个并集到元素只有一个
            this.size[i] = 1;
        }
    }

    /**
     * 如果p到值和它父亲到值是一样到，则找到p
     */
    find(p) {
        while(p !== this.parent[p]) {
            p = this.parent[p]
        }
        return p;
    }

    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }

    union(p, q) {
        let pRoot = this.find(p);
        let qRoot = this.find(q);

        if (pRoot === qRoot) {
            return;
        }
        // 如果pRoot并集个数 < qRoot并集个数
        if (this.size[pRoot] < this.size[qRoot]) {
            this.parent[pRoot] = qRoot;
            // pRoot并集个数就需要加qRoot并集个数
            this.siez[pRoot] += this.size[qRoot];
        } else {
            this.parent[qRoot] = pRoot;
            // pRoot并集个数就需要加qRoot并集个数
            this.siez[qRoot] += this.size[pRoot];
        }
    }
}