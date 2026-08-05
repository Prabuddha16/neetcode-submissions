class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let l = 0;
        let h = s.length - 1;
        while(l < h){
            let tmp = s[l];
            s[l] = s[h];
            s[h] = tmp;
            l++;
            h--;
        }
    }
}
