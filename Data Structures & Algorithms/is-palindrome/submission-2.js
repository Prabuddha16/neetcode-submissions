class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // return this.brute(s);
        return this.optimal(s);
    }

    optimal(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) {
                l++;
            }

            while (r > l && !this.isAlphanumeric(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

    brute(s) {
        let newStr = "";
        for (let ch of s) {
            if (this.isAlphanumeric(ch)) {
                newStr += ch.toLowerCase();
            }
        }

        return newStr === this.getReverseString(newStr);
    }

    /**
     * Get reverse string
     * @param {string} str
     * @return {string} reverse str
     */
    getReverseString(str) {
        return str.split("").reverse().join("");
    }

    /**
     * Check if a character is alphanumeric
     * @param {char} char
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9")
        );
    }
}
