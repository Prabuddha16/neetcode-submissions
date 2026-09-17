class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        return this.brute(nums);
    }

    brute(nums) {
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                return nums[i];
            }
        }
        return -1;
    }
}
