class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let bs = n.toString(2); // covert to binary str
        let arr = bs.split('0');
        let res = arr.join('');
        return res.length;
    }
}
