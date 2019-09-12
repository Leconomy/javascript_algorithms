class QuickUnion {
    constructor(count) {
        this.count = count;
        this.parent = [];
        for (let i = 0; i < count; i++) {
            this.parent[i] = i;
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
        this.parent[pRoot] = qRoot;
    }
}