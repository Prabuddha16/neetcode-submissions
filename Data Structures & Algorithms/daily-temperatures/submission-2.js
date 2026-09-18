class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const n = temperatures.length;
    // return this.brute(temperatures, n);
    return this.monoStack(temperatures, n);
  }

  monoStack(temp, n) {
    const result = new Array(n).fill(0);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
      // Remove useless candidates
      while (stack.length > 0 && temp[stack[stack.length - 1]] <= temp[i]) {
        stack.pop();
      }

      // Top is the nearest warmer day
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1] - i;
      }

      // Current day can help earlier days
      stack.push(i);
    }

    return result;
  }

  brute(temp, n) {
    // Result
    const resArr = new Array(n).fill(0);

    // Current day
    for (let i = 0; i < n; i++) {
      // Future day
      for (let j = i + 1; j < n; j++) {
        // Compare
        if (temp[j] > temp[i]) {
          // Distance for next day
          resArr[i] = j - i;
          break;
        }
      }
    }

    return resArr;
  }
}
