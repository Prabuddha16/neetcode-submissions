class ListNode {
    /**
     * @constructor
     * @param {number} val
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index >= this.size) return -1;
        let cur = this.head.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const node = new ListNode(val);
        node.next = this.head.next;
        this.head.next = node;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const node = new ListNode(val);
        let cur = this.head;
        while (cur.next !== null) {
            cur = cur.next;
        }
        cur.next = node;
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) return;
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        const node = new ListNode(val);
        node.next = cur.next;
        cur.next = node;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index >= this.size) return;
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        cur.next = cur.next.next;
        this.size--;
    }
}