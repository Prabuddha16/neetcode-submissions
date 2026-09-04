class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const result = [];
        let i = 0;

        // Iterate throght string
        while (i < s.length) {
            let j = i;

            while (s[j] !== "#") {
                j++;
            }

            const length = Number(s.slice(i, j)); // To get number(length) of a string

            const str = s.slice(j + 1, j + 1 + length);

            result.push(str);

            i = j + 1 + length;
        }

        return result;
    }
}
