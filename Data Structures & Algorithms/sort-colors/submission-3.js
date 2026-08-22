class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // return this.usingMethod(nums);
        // return this.bubbleSort(nums);
        // return this.insertionSort(nums);
        return this.selectionSort(nums);
    }

    // Find Min + Swap + Repeat
    selectionSort(nums) {
        let n = nums.length;

        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            // Find Min Element
            for (let j = i + 1; j < n; j++) {
                if (nums[j] < nums[minIdx]) {
                    minIdx = j;
                }
            }

            // Swap
            [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
        }

        return nums;
    }

    // Pick + Shift + Insert
    insertionSort(nums) {
        for (let i = 1; i < nums.length; i++) {
            let curr = nums[i];
            let j = i - 1;

            while (j >= 0 && nums[j] > curr) {
                nums[j + 1] = nums[j];
                j--;
            }

            nums[j + 1] = curr;
        }

        return nums;
    }

    // Compare + Swap + Repeat
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

    // Using Array Method
    usingMethod(nums) {
        return nums.sort((a, b) => a - b);
    }
}
