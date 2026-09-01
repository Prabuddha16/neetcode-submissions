class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // return this.brute(s, k);
        return this.slidingWindow(s, k);
    }

    slidingWindow(s, k) {
        let res = 0;

        // Step-1: Initialize left pointer of the window.
        let left = 0;

        // Step-2: Store the frequency of each character
        // inside the current window.
        let charMap = new Map();

        // Store the frequency of the most frequent character
        // in the current window.
        let maxFreq = 0;

        // Step-3: Expand the window using the right pointer.
        for (let right = 0; right < s.length; right++) {
            // Step-4: Increment the frequency of the
            // current character.
            const charCount = (charMap.get(s[right]) || 0) + 1;
            charMap.set(s[right], charCount);

            // Step-5: Update the maximum frequency
            // in the current window.
            maxFreq = Math.max(maxFreq, charCount);

            // Step-6: Calculate the current window length.
            const windowLength = right - left + 1;

            // Step-7: Calculate how many replacements
            // are required to make all characters the same.
            const replacement = windowLength - maxFreq;

            // Step-8: If replacements are greater than k,
            // shrink the window from the left.
            if (replacement > k) {
                charMap.set(s[left], charMap.get(s[left]) - 1);

                left++;
            }

            // Step-9: Update the maximum valid window length.
            res = Math.max(res, right - left + 1);
        }

        // Return the length of the longest valid substring.
        return res;
    }

    brute(s, k) {
        let res = 0;

        // Step-1: Try every index as the starting point of the substring
        for (let i = 0; i < s.length; i++) {
            // Step-2: Initialize a Map to store the frequency
            // of each character in the current substring.
            let charMap = new Map();

            // Store the frequency of the most frequent character
            // in the current substring.
            let maxFreq = 0;

            // Step-3: Expand the substring from index 'i' using the right pointer 'j'.
            for (let j = i; j < s.length; j++) {
                // Step-4: Increment the frequency of the current character.
                const charCount = (charMap.get(s[j]) || 0) + 1;
                charMap.set(s[j], charCount);

                // Step-5: Update the maximum frequency seen in the current substring.
                maxFreq = Math.max(maxFreq, charCount);

                // Step-6: Calculate the current substring length.
                const windowLength = j - i + 1;

                // Step-7: Calculate how many characters need
                // to be replaced to make all characters the same.
                // Keep the most frequent character and replace
                // all the remaining characters.
                const replacement = windowLength - maxFreq;

                // Step-8: If required replacements are within k,
                // the substring is valid. Update the maximum length.
                if (replacement <= k) {
                    res = Math.max(res, windowLength);
                }
            }
        }

        // Return the length of the longest valid substring.
        return res;
    }
}
