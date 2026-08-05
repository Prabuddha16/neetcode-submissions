class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];

        for(let i=0; i < nums.length; i++){
            let currSum = nums[i];
            res = Math.max(res, currSum);
            for(let j = i+1; j < nums.length; j++){
                currSum *= nums[j];
                res = Math.max(res, currSum);
            }
        }

        return res;
    }
}
