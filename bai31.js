function find3Numbers(arr, k) {
    let arr_size = arr.length;
    for (let i = 0; i < arr_size - 2; i++)
    {
        for (let j = i + 1; j < arr_size - 1; j++)
        {
            for (let l = j + 1; l < arr_size; l++)
            {
                if (arr[i] + arr[j] + arr[l] === k) {
                    return 'YES';
                }
            }
        }
    }
    return 'NO';
}

console.log(find3Numbers([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1], 30));