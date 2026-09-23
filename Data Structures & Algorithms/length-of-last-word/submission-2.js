class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        return this.brute(s);
    }

    // O(n) extra space because of trim() + split()
    brute(s) {
        const arrayOfWord = s.trim().split(" ");
        const res = arrayOfWord[arrayOfWord.length - 1].length;
        return res;
    }
}
