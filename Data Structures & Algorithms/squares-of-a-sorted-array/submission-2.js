class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        // return this.brute(nums);
        return this.twoPointer(nums);
    }

    twoPointer(nums) {
        let l = 0;
        let r = nums.length - 1;
        let res = new Array(nums.length);
        let idx = nums.length - 1;

        while (l <= r) {
            let lsq = nums[l] * nums[l];
            let rsq = nums[r] * nums[r];

            if (lsq > rsq) {
                res[idx] = lsq;
                l++;
            } else {
                res[idx] = rsq;
                r--;
            }
            idx--;
        }
        return res;
    }

    brute(nums) {
        for (let i = 0; i < nums.length; i++) {
            nums[i] *= nums[i];
        }
        nums.sort((a, b) => a - b);
        return nums;
    }
}
