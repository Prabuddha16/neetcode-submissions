class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        return this.brute(nums);
    }

    brute(nums) {
        let n = nums.length;

        for (let num of nums) {
            // JS Array Inbuilt Method
            let count = nums.reduce((acc, val) => acc + (val === num ? 1 : 0), 0);

            // Check Majority
            if (count > Math.floor(n / 2)) {
                return num;
            }
        }

        return -1;
    }
}
