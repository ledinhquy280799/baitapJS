function sum(arr)
{
    let sum = arr.reduce((a, b) => a + b, 0)
    return sum;
}

console.log(sum([1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]));