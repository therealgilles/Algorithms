//
// LRUCache
//

/**
 * @param {number} capacity
 */

const LRUCache = function (capacity) {
  this.capacity = capacity
  this.head = null
  this.tail = null // points to end of double-linked list
  this.cache = new Map() // stores key + reference to list node
}

function ListNode (key, val) {
  this.prev = this.next = null
  this.val = val
  this.key = key
}

// cache stores key and reference to list node
// list node stores key/value pair
// key1/value1 -> key2/value2 -> key3/value3 -> key4/value4

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1

  let node = this.cache.get(key)
  // add node back as newest
  this.put(key, node.val)

  return this.tail.val
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // check if key is already part of cache
  if (this.cache.has(key)) {
    // if key is on newest node, only update value
    if (this.tail && (this.tail.key === key)) {
      this.tail.val = value
      return
    }

    // remove key from list and cache
    this.remove(key)
  } else {
    // if already at capacity, remove oldest entry
    if (this.cache.size === this.capacity) {
      this.remove(this.head.key)
    }
  }

  // add key/value as newiest entry
  if (!this.head) {
    this.head = new ListNode(key, value)
    this.tail = this.head
  } else {
    let node = this.tail
    this.tail.next = new ListNode(key, value)
    this.tail.next.prev = this.tail
    this.tail = this.tail.next
  }
  this.cache.set(key, this.tail)
}

LRUCache.prototype.remove = function (key) {
  if (this.cache.has(key)) {
    let node = this.cache.get(key)
    if (node.prev) {
      node.prev.next = node.next
      node.next.prev = node.prev
    } else if (node.next) {
      node.next.prev = null
      this.head = node.next
    } else {
      this.head = this.tail = null
    }
    delete node
    this.cache.delete(key)
  }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const debug = false

if (debug) {

  let cache = new LRUCache(3) // limit of 3 items
  cache.put('item1', 1)
  cache.put('item2', 2)
  cache.put('item3', 3)
  cache.put('item4', 4)

  console.log(cache.get('item3')) // 3
  console.log(cache.get('item2')) // 2
  console.log(cache.get('item1')) // -1
  console.log(cache.cache.keys()) // 4 3 2
  cache.put('item5', 5)
  cache.put('item6', 6)
  console.log(cache.cache.keys()) // 2 5 6
  console.log(cache.get('item4')) // -1
  console.log(cache.get('item3')) // -1
  console.log(cache.get('item2')) // 2
  console.log(cache.get('item5')) // 5
  console.log(cache.get('item6')) // 6

  cache = new LRUCache(2)
  // [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]
  cache.put(2, 1)
  cache.put(2, 2)
  console.log(cache.get(2)) // 2
  cache.put(1, 1)
  cache.put(4, 1)
  console.log(cache.get(2)) // -1

}

// Next challenges: LFU CacheDesign In-Memory File SystemDesign Compressed String Iterator
