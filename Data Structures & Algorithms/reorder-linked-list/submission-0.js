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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let current = slow;

// 3-4
// 4-3-null
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        let second = prev;
        while (second && second.next) {
            let tmp1 = head.next;
            let tmp2 = second.next;

            head.next = second;
            second.next = tmp1;
            second = tmp2;
            head = tmp1;
        
        }
        // console.log('head', head);

        // console.log('second', second);
    }
}
