var findPivot = function (array, start, end) {
  //var pivot = null;
  //for (var i = 1; i < array.length; i++) {
  //  if (array[i-1] >= array[i]) {
  //    pivot = i;
  //  }
 // }
  start = start || 0;
  end = end || (array.length - 1);
  if (start === end) { return null; }
  if (start + 1 === end) {
    if (array[start] >= array[end]) {
      return end;
    }
    return null;
  }

  var mid = Math.floor((end - start) / 2) + start;
  if (array[start] < array[mid]) {
    return findPivot(array, mid, end);
  } else {
    return findPivot(array, start, mid);
  }
  
  return pivot;
};
//console.log(findPivot(['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']))
//console.log(findPivot(['cat', 'dog', 'eagle', 'falcon', 'apple', 'bear']))
//console.log(findPivot(['bear', 'cat', 'dog', 'eagle', 'falcon', 'apple']))
//console.log(findPivot(['apple', 'bear', 'cat', 'dog', 'eagle', 'falcon']))
//console.log(findPivot(['falcon', 'apple', 'bear', 'cat', 'dog', 'eagle']))
