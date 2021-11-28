function filterPrimeNumber(arr)
{
    let primeNumber = arr.filter(num => {
        for (let i = 2; i < num; i++) {
            if (num % 2 === 0) return false;
        }
        return num !== 1;
    })
    return primeNumber;
}

console.log(filterPrimeNumber([1,2,3,2,3,4,6,7]));