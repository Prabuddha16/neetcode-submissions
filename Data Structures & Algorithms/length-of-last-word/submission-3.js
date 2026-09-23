class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        // return this.brute(s);
        return this.optimal(s);
    }

    optimal(s) {
        let i = s.length - 1;

        // Remove Trailing Spaces
        while (i >= 0 && s[i] === " ") {
            i--;
        }

        // Find Last Word Length
        let length = 0;

        while (i >= 0 && s[i] !== " ") {
            length++;
            i--;
        }

        return length;
    }

    // O(n) extra space because of trim() + split()
    brute(s) {
        // built-in (Single line)
        // return s.trim().split(' ').pop().length;
        const arrayOfWord = s.trim().split(" ");
        const res = arrayOfWord[arrayOfWord.length - 1].length;
        return res;
    }
}
