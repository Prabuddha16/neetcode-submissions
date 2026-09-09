class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // return this.brute(numbers, target);
        // return this.binarySearch(numbers, target);
        // return this.hashing(numbers, target);
        return this.twoPointers(numbers, target);
    }

    twoPointers(arr, tar) {
        let l = 0;
        let r = arr.length - 1;

        while (l < r) {
            const currSum = arr[l] + arr[r];

            if (currSum === tar) {
                return [l + 1, r + 1];
            } else if (currSum < tar) {
                l++;
            } else {
                r--;
            }
        }
        return [];
    }

    hashing(arr, tar) {
        const map = new Map();
        for (let i = 0; i < arr.length; i++) {
            const tmp = tar - arr[i];
            if (map.has(tmp)) {
                return [map.get(tmp), i + 1];
            }
            map.set(arr[i], i + 1);
        }
        return [];
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
