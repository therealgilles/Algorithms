function Person (name) {
  this.name = name
  this.parents = []
}

const debug = false

// O(h^2) where h is the max height of the tree
const bloodRelative = (p1, p2, visited = new Set()) => {
  if (debug) console.log(p1.name, p2.name)
  if (p1.name === p2.name) return true

  if (debug) console.log('... checking visited', visited.has(p1))
  if (visited.has(`${p1.name}-${p2.name}`)) return false
  visited.add(`${p1.name}-${p2.name}`)

  for (let p1Parent of p1.parents) {
    if (bloodRelative(p1Parent, p2, visited)) return true
    
    // solution #2
    // for (let p2Parent of p2.parents) {
    //   if (bloodRelative(p2Parent, p1Parent, visited)) return true
    // }
  }
  
  // solution #1
  for (let p2Parent of p2.parents) {
    if (bloodRelative(p2Parent, p1, visited)) return true
  }

  return false
}

/*
 *            p1        p2
 *          p3  p4    p5  p6
 *        p7 p8  p9 p10    p11
 *      p12  p13  p14    p15 p16
 *
 */

const p1 = new Person('p1')
const p2 = new Person('p2')
const p3 = new Person('p3')
const p4 = new Person('p4')
const p5 = new Person('p5')
const p6 = new Person('p6')
const p7 = new Person('p7')
const p8 = new Person('p8')
const p9 = new Person('p9')
const p10 = new Person('p10')
const p11 = new Person('p11')
const p12 = new Person('p12')
const p13 = new Person('p13')
const p14 = new Person('p14')
const p15 = new Person('p15')
const p16 = new Person('p16')

p1.parents = []
p2.parents = []
p3.parents = [p1]
p4.parents = [p1]
p5.parents = [p2]
p6.parents = [p2]
p7.parents = [p3]
p8.parents = [p3]
p9.parents = [p4]
p10.parents = [p5]
p11.parents = [p6]
p12.parents = [p7]
p13.parents = [p8]
p14.parents = [p9, p10]
p15.parents = [p11]
p16.parents = [p11]

console.log(bloodRelative(p14, p1) === true) // true
console.log(bloodRelative(p14, p2) === true) // true
console.log(bloodRelative(p14, p13) === true) // true
console.log(bloodRelative(p14, p12) === true) // true
console.log(bloodRelative(p12, p15) === false) // false
console.log(bloodRelative(p3, p16) === false) // false
console.log(bloodRelative(p12, p8) === true) // true
console.log(bloodRelative(p3, p13) === true) // true

