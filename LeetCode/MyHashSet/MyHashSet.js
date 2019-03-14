/**
 * Initialize your data structure here.
 */
const MyHashSet = function(limit = 10) {
  this.size = 0
  this._minlimit = limit
  this._limit = this._minlimit
  this._storage = Array(this._limit)

  this._checklimit = () => {
    if (this.size * 2 > this._limit) {
      this._limit = this._limit << 1
      this._rehash(this._limit)
    } else if ((this._limit > this._minlimit) && this.size < 2 * this._limit) {
      this._limit = this._limit >> 1
      this._rehash(this._limit)
    }
  }

  this._rehash = newLimit => {
    const newStorage = Array(newLimit)

    this._storage.forEach(entry => {
      entry.forEach(idx => {
        const newIdx = this._hashFn(idx)
        newStorage[newIdx] || (newStorage[newIdx] = [])
        newStorage[newIdx].push(idx)
      })
    })

    this._storage = newStorage
  }

  this._hashFn = key => {
    return key % this._limit
  }
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this._checklimit()

  const hKey = this._hashFn(key)
  this._storage[hKey] || (this._storage[hKey] = [])
  let found
  for (let i = 0; i < this._storage[hKey].length; i += 1) {
    const idx = this._storage[hKey][i]
    if (idx === key) {
      found = true
      break
    }
  }

  if (!found) {
    this._storage[hKey].push(key)
    this.size += 1
  }
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  const hKey = this._hashFn(key)
  if (!this._storage[hKey]) return

  for (let i = 0; i < this._storage[hKey].length; i += 1) {
    const idx = this._storage[hKey][i]
    if (key === idx) {
      this._storage[hKey].splice(i, 1)
      if (this._storage[hKey].length === 0) delete this._storage[hKey]
      this.size -= 1
      return
    }
  }    
}

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  const hKey = this._hashFn(key)
  if (!this._storage[hKey]) return false

  for (let i = 0; i < this._storage[hKey].length; i += 1) {
    if (key === this._storage[hKey][i]) return true
  }

  return false
}

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

const hashSet = new MyHashSet()
hashSet.add(1)
hashSet.add(2)
console.log(hashSet.contains(1))    // returns true
console.log(hashSet.contains(3))    // returns false (not found)
hashSet.add(2)
console.log(hashSet.contains(2))    // returns true
hashSet.remove(2)
console.log(hashSet.contains(2))    // returns false (already removed)
console.log(hashSet)
console.log(hashSet._storage)

// https://leetcode.com/problems/min-stack/
// https://leetcode.com/problems/line-reflection/
// https://leetcode.com/problems/maximum-frequency-stack/
