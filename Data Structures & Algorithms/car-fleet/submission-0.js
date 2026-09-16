class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        return this.brute(target, position, speed);
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

        for(const [posi, spd] of cars){
            // 4. Check currTime
            const currTime = (target - posi) / spd;

            if(currTime > prevTime){
                fleets++;
                prevTime = currTime;
            }
        }

        return fleets
    }
}
