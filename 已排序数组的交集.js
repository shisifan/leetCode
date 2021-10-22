function intersect(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    let result = [];
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] === arr2[p2]) {
        result.push(arr1[p1])
        p1++;
        p2++;
      } else {
        if (arr1[p1] < arr2[p2]) {
          p1++;
        } else {
          p2++;
        }
      }
    } 
    return result
}
console.log(intersect(
    [1,2,2,3,4,4],
    []
));