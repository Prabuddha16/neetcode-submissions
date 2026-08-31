class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // return this.brute(s);
        return this.slidingWindow(s);
    }

    slidingWindow(s) {
        // Step 1: Create a Set to store unique characters
        // and use 'j' as the left pointer of the window.
        const charSet = new Set();
        let j = 0;
        let res = 0;

        // Step 2: Move the right pointer 'i' through the string.
        for (let i = 0; i < s.length; i++) {
            // Step 3: If the current character already exists
            // in the Set, remove characters from the left
            // until the duplicate character is removed.
            while (charSet.has(s[i])) {
                charSet.delete(s[j]);
                j++;
            }

            // Add the current character to the Set.
            charSet.add(s[i]);

            // Step 4: Calculate the current window length
            // and keep track of the maximum length.
            res = Math.max(res, i - j + 1);
        }

        // Return the length of the longest substring
        // without repeating characters.
        return res;
    }

    brute(s) {
        let res = 0;

        // Step 1: Try every character as the starting point
        // of the substring.
        for (let i = 0; i < s.length; i++) {
            // Step 2: Create a new Set for each starting point
            // to track unique characters.
            let charSet = new Set();

            // Step 3: Expand the substring from index 'i'
            // using the right pointer 'j'.
            for (let j = i; j < s.length; j++) {
                // Step 4: If the character is already present,
                // we found a duplicate, so stop this window.
                if (charSet.has(s[j])) {
                    break;
                }

                // Add the unique character to the Set.
                charSet.add(s[j]);
            }

            // Step 5: Compare the current substring length
            // with the maximum length found so far.
            res = Math.max(res, charSet.size);
        }

        // Return the maximum length.
        return res;
    }
}
