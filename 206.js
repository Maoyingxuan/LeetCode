
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return head
    let cur = head
    let pre = null
    while(cur){
        let temp = cur.next
        cur.next = pre
        pre = cur 
        cur = temp
    }
    return pre
};
reverseList(head = [1,2,3,4,5])