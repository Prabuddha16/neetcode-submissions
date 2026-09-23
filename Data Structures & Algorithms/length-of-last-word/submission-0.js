class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const arrayofChar = s.trim().split(" ");
        const res = arrayofChar[arrayofChar.length - 1].length;
        return res;
    }
}
