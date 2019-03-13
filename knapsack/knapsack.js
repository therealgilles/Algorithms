var knapsack = function(max, items) {
  // inputs
  //   max: max weight accepted by the knapsack
  //   items: array of items, an item is a pair with a weight and a cash value
  //     [ [ weight1, cashValue1 ], [ weight2, cashValue2 ]...]
  // output
  //   amount of cash
  
  let maxCash = 0
  if (!items.length)  return maxCash
  
  for (let i = 0; i < items.length; i++) {
    let itemWeight = items[i][0]
    let itemCash = items[i][1]
    //console.log('trying weight/cash', itemWeight, itemCash)

    if (itemWeight > max) {
      break // no more room
    } else {
      // see if we can add more items
      let leftItems = items.slice()
      leftItems.splice(i, 1)
      let leftCash = knapsack(max - itemWeight, leftItems)
      maxCash = Math.max(maxCash, itemCash + leftCash)
    }
  }
  
  return maxCash
}

if (1) {
  const assert = (value, expected) => {
    if (eval(value) === expected) {
      console.log(`PASS: ${value} === ${expected}`)
      return true
    } else {
      console.error(`FAIL: ${value} !== ${expected}`)
      return false
    }
  }
  
  assert('knapsack(10, [ [4, 2], [4, 3], [2, 1] ])', 6)
  assert('knapsack(8, [ [4, 2], [4, 3], [2, 1] ])', 5)
  assert('knapsack(6, [ [4, 2], [4, 3], [2, 1] ])', 4)
  assert('knapsack(6, [ [7, 2], [8, 3], [9, 1] ])', 0)
  assert('knapsack(7, [ [1, 1], [2, 2], [3, 3], [4, 4], [5, 4] ])', 7)
  //assert('knapsack(7, [ [1, 1], [2, 2], [3, 3], [4, 4], [5, 4] ])', 6)
}
