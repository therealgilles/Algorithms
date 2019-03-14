/**
 * Initialize your data structure here.
 */
const MyHashMap = function(limit = 100) {
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
      entry.forEach(([idx, value]) => {
        const newIdx = this._hashFn(idx)
        newStorage[newIdx] || (newStorage[newIdx] = [])
        newStorage[newIdx].push([idx, value])
      })
    })

    this._storage = newStorage
  }

  this._hashFn = key => {
    return key % this._limit
  }
}

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  this._checklimit()

  const hKey = this._hashFn(key)
  this._storage[hKey] || (this._storage[hKey] = [])
  let found
  for (let i = 0; i < this._storage[hKey].length; i += 1) {
    const [idx] = this._storage[hKey][i]
    if (idx === key) {
      found = true
      this._storage[hKey][i] = [key, value]
      break
    }
  }

  if (!found) {
    this._storage[hKey].push([key, value])
    this.size += 1
  }
}

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  const hKey = this._hashFn(key)
  if (!this._storage[hKey]) return -1

  for (let i = 0; i < this._storage[hKey].length; i += 1) {
    const [idx, value] = this._storage[hKey][i]
    if (key === idx) return value
  }

  return -1
}

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  const hKey = this._hashFn(key)    
  if (!this._storage[hKey]) return

  for (let i = 0; i < this._storage[hKey].length; i += 1) {
    const [idx] = this._storage[hKey][i]
    if (key === idx) {
      this._storage[hKey].splice(i, 1)
      if (this._storage[hKey].length === 0) delete this._storage[hKey]
      this.size -= 1
      return
    }
  }
}

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const hash = new MyHashMap(8)
for (let i = 0; i < 20; i += 1) {
  hash.put(i, String.fromCharCode(97 + i))
  hash.put(i * 200, String.fromCharCode(97 + i))
  hash.put(i, String.fromCharCode(97 + i - 32))
}
console.log(hash)
console.log(hash._storage)
for (let i = 0; i < 20; i += 1) {
  hash.remove(i + 4)
}
console.log(hash._storage)

// https://leetcode.com/problems/design-hashset/
