class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let h = nums.length - 1;

        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2);

            if (nums[mid] === target) return mid;

            if (nums[mid] < target) {
                l = mid + 1;
            } else {
                h = mid - 1;
            }
        }

        return -1;
    }
}
