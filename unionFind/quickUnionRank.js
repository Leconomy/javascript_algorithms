
class UnionFind {
    constructor(capcity) {
        this.count = capcity;
        this.id = [];
        // 表示以i为跟的集合所表示的层数
        this.rank = [];
        for (let i = 0; i < capcity; i++) {
            this.id[i] = i;
            this.rank[i] = 1;
        }
    }
    /**
     * 查找p元素
     * @param {Number} p 
     */
    find(p) {
        while(p !== this.parent[p]) {
            p = this.parent[p]
        }
        return p;
    }
    /**
     * 确定p, q是否相连，如果他们到id值相同即相连
     * @param {*} p 
     * @param {*} q 
     */
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    /**
     * 合并p,q值，即把p,q到id值设置为相同即可
     * @param {*} p 
     * @param {*} q 
     */
    union(p, q) {
        let pRoot = this.find(p);
        let qRoot = this.find(q);

        if (pRoot === qRoot) {
            return;
        }
        // 如果pRoot并集个数 < qRoot并集个数
        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        } else if(this.rank[qRoot] < this.rank[pRoot]) {
            this.parent[qRoot] = pRoot;
        }
        else {
            // 当rank[qroot] === rank[qRoot]时，随便修改跟指针

            this.parent[pRoot] = qRoot;
            this.rank[qRoot] += 1;
        }
    }
}