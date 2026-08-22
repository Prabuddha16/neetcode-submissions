class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // return this.usingMethod(nums);
        return this.bubbleSort(nums);
    }

    usingMethod(nums) {
        return nums.sort((a, b) => a - b);
    }

    bubbleSort(nums) {
        let n = nums.length;

        for (let i = 0; i < n - 1; i++) {
            let swapped = false;

            for (let j = 0; j < n - 1 - i; j++) {
                if (nums[j] > nums[j + 1]) {
                    [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        }

        return nums;
    }
}
