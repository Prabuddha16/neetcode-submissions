class MyHashSet {
    constructor() {
        this.data = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.data.includes(key)) {
            this.data.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const idx = this.data.indexOf(key);
        if (idx !== -1) {
            this.data.splice(idx, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.data.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
