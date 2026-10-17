class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        return this.optimal(nums);
    }

    optimal(nums) {
        let i = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] != 0) {
                nums[i++] = nums[j];
            }
        }

        while (i < nums.length) {
            nums[i++] = 0;
        }
    }

    brute(nums) {
        let tmp = [];
        for (let num of nums) {
            if (num !== 0) {
                tmp.push(num);
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (i < tmp.length) {
                nums[i] = tmp[i];
            } else {
                nums[i] = 0;
            }
        }
    }
}
