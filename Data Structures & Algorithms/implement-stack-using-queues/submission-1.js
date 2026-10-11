class MyStack {
    constructor() {
        this.q = [];
        // this.q1 = new Queue();
        // this.q2 = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // this.q2.push(x);

        // while (!this.q1.isEmpty()) {
        //     this.q2.push(this.q1.pop());
        // }

        // [this.q1, this.q2] = [this.q2, this.q1];

        this.q.push(x);

        const queueSize = this.q.length;

        for (let i = 0; i < queueSize - 1; i++) {
            this.q.push(this.q.shift());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        // return this.q1.pop();
        return this.q.shift();
    }

    /**
     * @return {number}
     */
    top() {
        // return this.q1.front();
        return this.q[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        // return this.q1.isEmpty();
        return this.q.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
