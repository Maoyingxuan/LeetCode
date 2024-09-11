
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
var removeNthFromEnd = function(head, n) {
    let start = new ListNode(0)
    start.next = head
    let slow_point = start
    let fast_point = start
    for(let i = 0;i<=n;i++) fast_point=fast_point.next
    while(fast_point !== null){
        slow_point = slow_point.next
        fast_point = fast_point.next
    }
    slow_point.next = slow_point.next.next
    return start.next
};
console.log(removeNthFromEnd([1,2,3,4,5],2))