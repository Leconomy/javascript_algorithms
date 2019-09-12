/** 
 * 并查集:
 * 1、对于一组数据，可以把p,q连接到一起
 * 2、找到p数据
 * 可以解决问题：
 * 1、p,q是否相连
*/

class UnionFind {
    constructor(capcity) {
        this.count = capcity;
        this.id = [];
        for (let i = 0; i < capcity; i++) {
            this.id[i] = i;
        }
    }
    /**
     * 查找p元素
     * @param {Number} p 
     */
    find(p) {
        return this.id[p];
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
        let pId = this.find(p);
        let qId = this.find(q);

        if (pId === qId) {
            return;
        }

        for (let i = 0; i < this.count; i++) {
            if (this.id[i] === pId) {
                this.id[i] = qId;
            }
        }
    }
}