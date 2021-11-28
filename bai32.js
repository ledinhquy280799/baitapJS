function insertElementIncre(arr, k)
{
    let p, i;
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] > k) {
            p = i;
            break;
        }
    }
    for (i = arr.length; i >= p; i--) {
        arr[i] = arr[i - 1];
    }
    arr[p] = k;
    return arr;
}

console.log(insertElementIncre([1,3,6,9,11,20], 13));