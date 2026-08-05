class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let n = nums.length;

        // Base
        let min = nums[0];
        let max = nums[0];
        let res = nums[0];

        // Main
        for(let i = 1; i < n; i++){
            let num = nums[i];
            // Swap
            if(num < 0){
                [max, min] = [min, max];
            }

            // Reset Min & Max Subarray
            max = Math.max(num, num * max);
            min = Math.min(num, num * min);

            res = Math.max(res, max);
        }

        return res;
    }
}
