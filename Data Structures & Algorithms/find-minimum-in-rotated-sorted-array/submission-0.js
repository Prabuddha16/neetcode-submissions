class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let h = nums.length - 1;

        while(l < h){
            let m = Math.floor((l + h)/2);

            if(nums[m] > nums[h]){
                l = m + 1;
            } else {
                h = m;
            }
        }

        return nums[l];
    }
}
