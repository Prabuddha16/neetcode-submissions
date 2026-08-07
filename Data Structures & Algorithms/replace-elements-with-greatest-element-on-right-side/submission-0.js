class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
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
