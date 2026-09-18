class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findDuplicate(nums) {
    // return this.brute(nums);
    // return this.hashing(nums);
    return this.fastSlowPointer(nums);
  }

  fastSlowPointer(nums) {
    // Phase 1: Detect cycle
    let slow = nums[0];
    let fast = nums[0];

    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);

    // Phase 2: Find cycle entrance
    slow = nums[0]; // reset slow pointer

    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }

    return slow;
  }

  hashing(nums) {
    const set = new Set();

    for (let num of nums) {
      if (set.has(num)) {
        return num;
      }
      set.add(num);
    }

    return -1;
  }

  brute(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) {
        return nums[i];
      }
    }
    return -1;
  }
}
