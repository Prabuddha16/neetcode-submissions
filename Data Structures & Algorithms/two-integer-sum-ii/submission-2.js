class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // return this.brute(numbers, target);
        return this.binarySearch(numbers, target);
    }

    binarySearch(arr, tar) {
        for (let i = 0; i < arr.length; i++) {
            let l = i + 1;
            let r = arr.length - 1;
            let temp = tar - arr[i];
            while (l <= r) {
                let mid = l + Math.floor((r - l) / 2);
                if (arr[mid] === temp) {
                    return [i + 1, mid + 1];
                } else if (arr[mid] < temp) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
        return [];
    }

    brute(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    return [i + 1, j + 1];
                }
            }
        }
        return [];
    }
}
