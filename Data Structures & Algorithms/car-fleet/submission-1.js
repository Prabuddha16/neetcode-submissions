class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    // return this.brute(target, position, speed);
    return this.optimal(target, position, speed);
  }

  optimal(target, position, speed) {
    // Map Cars Based on Position
    const cars = position
      .map((posi, idx) => [posi, speed[idx]])
      .sort((a, b) => b[0] - a[0]);

    const stack = [];

    for (const [pos, spd] of cars) {
      // Fetch Arrival Time of Current Car
      const arrivalTime = (target - pos) / spd;

      // Comparison with Previous Car Info
      if (!stack.length || arrivalTime > stack[stack.length - 1]) {
        stack.push(arrivalTime);
      }
    }

    return stack.length;
  }

  brute(target, position, speed) {
    const cars = [];
    // 1. Create all cars list with their posi & spd
    for (let i = 0; i < position.length; i++) {
      cars.push([position[i], speed[i]]);
    }

    // 2. Sort cars based on posi
    cars.sort((a, b) => b[0] - a[0]);

    // 3. Compare prev or curr time of fleet
    let fleets = 0;
    let prevTime = 0;

    for (const [posi, spd] of cars) {
      // 4. Check currTime
      const currTime = (target - posi) / spd;

      if (currTime > prevTime) {
        fleets++;
        prevTime = currTime;
      }
    }

    return fleets;
  }
}
