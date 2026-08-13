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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        return this.brute(lists);
    }

    brute(lists) {
        const arr = [];
        for (let list of lists) {
            let curr = list;
            while (curr) {
                arr.push(curr.val);
                curr = curr.next;
            }
        }

        arr.sort((a, b) => a - b);

        const dummy = new ListNode(0);
        let curr = dummy;

        for (const value of arr) {
            curr.next = new ListNode(value);
            curr = curr.next;
        }

        return dummy.next;
    }
}
