function findNumber(arr)
{
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let avg = arr.reduce((a, b) => a + b, 0) / arr.length;

    return `${max} ${min} ${avg}`
}

console.log(findNumber([1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]));