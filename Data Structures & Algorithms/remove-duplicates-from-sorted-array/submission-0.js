class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        return this.brute(nums);
    }

    brute(nums) {
        const unique = [...new Set(nums)];

        for (let i = 0; i < unique.length; i++) {
            nums[i] = unique[i];
        }

        return unique.length;
    }
}
