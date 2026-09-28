/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        return this.brute(head, val);
        // return this.twoPointer(head, val);
    }

    twoPointer(head, val) {
        let dummy = new ListNode(-1, head);
        let curr = dummy;

        while (curr.next) {
            if (curr.next.val === val) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
        }

        return dummy.next;
    }

    brute(head, val) {
        const arr = [];
        let curr = head;

        // 1. Create Array from LL
        while (curr) {
            if (curr.val !== val) {
                arr.push(curr.val);
            }
            curr = curr.next;
        }

        // 2. Return once all array elements traversed
        if (!arr.length) return null;

        // 3. Result LL
        const res = new ListNode(arr[0]);
        curr = res;
        for (let i = 1; i < arr.length; i++) {
            const node = new ListNode(arr[i]);
            curr.next = node;
            curr = curr.next;
        }

        return res;
    }
}
