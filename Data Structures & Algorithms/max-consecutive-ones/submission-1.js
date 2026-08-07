class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0;
        let cnt = 0;

        // for (const n of nums) {
        //     if (n === 0) {
        //         res = Math.max(res, cnt);
        //         cnt = 0;
        //     } else {
        //         cnt++;
        //     }
        // }

        // return Math.max(res, cnt);

        for (const n of nums) {
            cnt = n === 1 ? cnt + 1 : 0;
            res = Math.max(res, cnt);
        }

        return res;
    }
}
