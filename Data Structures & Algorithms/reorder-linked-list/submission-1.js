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

        if(!head || !head.next) return head;

        let slow = head;
        let fast = head;
        
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next; 
        }
  // 1-2-3-4-5
  // slow - 1-2-3
  // fast 4-5
        let prev = null;
        let current = slow;
        while(current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        let first = head;
        let second = prev;
        while(second && second.next) {
            let tmp1 = first.next;
            let tmp2 = second.next;

            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;

        }

        // console.log('head', head);

        // console.log('second', second);
    }
}
