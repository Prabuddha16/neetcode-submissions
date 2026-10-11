class Solution {
    constructor() {
        this.dp = new Map();
    }

    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        // if (n <= 2) {
        //     return n === 0 ? 0 : 1;
        // }
        // return this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3);

        if (n <= 2) {
            return n === 0 ? 0 : 1;
        }
        if (this.dp.has(n)) {
            return this.dp.get(n);
        }
        const result = this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3);
        this.dp.set(n, result);
        return result;
    }
}
