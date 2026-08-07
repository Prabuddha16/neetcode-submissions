class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        return this.suffix(arr);
    }

    suffix(arr) {
        let n = arr.length;
        let res = new Array(n);
        let maxVal = -1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] = maxVal;
            maxVal = Math.max(maxVal, arr[i]);
        }
        return res;
    }

    brute(arr) {
        let n = arr.length;
        let res = new Array(n);

        for (let i = 0; i < n; i++) {
            let maxVal = -1;
            for (let j = i + 1; j < n; j++) {
                maxVal = Math.max(maxVal, arr[j]);
            }
            res[i] = maxVal;
        }

        return res;
    }
}
