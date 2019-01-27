//
// Heap Sort
//

const heapSort = (array, count) => {
  (count === undefined) && (count = array.length)

  heapify(array, count)

  // array[0:end-1] is a heap
  // array[end:count-1] is a sorted array
  //
  let end = count - 1

  while (end > 0) {
    // a[0] is the heap root and largest value
    let tmp = array[end]
    array[end] = array[0]
    array[0] = tmp
    end -= 1
    siftDown(array, 0, end)
  }

  return array
}

const iParent = i => ((i-1) >> 1)
const iLeftChild = i => ((i << 1) + 1)
const iRightChild = i => ((i << 1) + 2)

const heapify = (array, count) => {
  let start = iParent(count - 1)

  while (start >= 0) {
    siftDown(array, start, count - 1)
    start -= 1
  }
}

const siftDown = (array, start, end) => {
  let root = start

  while (iLeftChild(root) <= end) {
    let child = iLeftChild(root)
    let swap = root

    if (array[swap] < array[child]) {
      swap = child
    }
    if ((child+1 <= end) && (array[swap] < array[child+1])) {
      swap = child + 1
    }
    if (swap === root) {
      return;
    } else {
      let tmp = array[root]
      array[root] = array[swap]
      array[swap] = tmp
      root = swap
    }
  }
}

const debug = false

if (debug) {

  console.log(heapSort([2, 0, 1, 3, -1, 4])) // [ -1, 0, 1, 2, 3, 4 ]

}
