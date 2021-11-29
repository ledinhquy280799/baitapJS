function findNumberClosest(arr, k) {
    return arr.filter(function (a) {
        return Math.abs(a - k) == 1 
    })
}

console.log(findNumberClosest([1,2,3,4,6,7], 5));