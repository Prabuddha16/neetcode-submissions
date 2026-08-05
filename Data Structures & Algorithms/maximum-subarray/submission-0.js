class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
               let n = nums.length;
        let res = nums[0];
        for(let i=0; i<n; i++){
            let curr = 0;
            for(let j=i;j<n;j++){
                curr += nums[j];
                res = Math.max(res,curr);
            }
        }
        return res;
    }
}
