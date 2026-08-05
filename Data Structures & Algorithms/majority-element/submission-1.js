class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let v = 0;
        let c = 0;
        nums.forEach((n)=>{
if(v === 0) {c = n}
v+= (n === c) ? 1: -1;
        })
        return c;
    }
}
