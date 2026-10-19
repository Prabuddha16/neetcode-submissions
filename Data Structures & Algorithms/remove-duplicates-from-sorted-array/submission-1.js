class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // return this.brute(nums);
        return this.optimal(nums);
    }

    optimal(nums) {
        let i = 0;

        for (let j = 1; j < nums.length; j++) {
            if (nums[i] !== nums[j]) {
                i++;
                nums[i] = nums[j];
            }
        }

        return i + 1;
    }

    brute(nums) {
        const unique = [...new Set(nums)];

        for (let i = 0; i < unique.length; i++) {
            nums[i] = unique[i];
        }

        return unique.length;
    }
}
