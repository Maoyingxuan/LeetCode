//堆排序
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = [,]
    for(let key of nums){
        if (heap.length <= k) {
            insert(heap, key); // 插入前 k 个数
          } else if (key > heap[1]) {
            heap[1] = key; // 用更大的值替换堆顶
            heapify(heap, 1); // 重新下沉维护堆结构
          }
    }
    console.log(heap);
    return heap[1]
};
const swap = (arr,i,j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function insert(arr,key){
    arr.push(key)
    let i = arr.length - 1
    while(i/2 > 0 && arr[i] < arr[Math.floor(i/2)]){
        swap(arr,i,Math.floor(i/2))
        i = Math.floor(i/2)
    }
}
// 下沉（替换堆顶后维护小顶堆）
function heapify(arr, i) {
    let smallest = i;
    let left = 2 * i;
    let right = 2 * i + 1;
  
    if (left < arr.length && arr[left] < arr[smallest]) {
      smallest = left;
    }
    if (right < arr.length && arr[right] < arr[smallest]) {
      smallest = right;
    }
  
    if (smallest !== i) {
      swap(arr, i, smallest);
      heapify(arr, smallest);
    }
  }
findKthLargest([3,2,1,5,6,4],3)