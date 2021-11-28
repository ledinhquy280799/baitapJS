function findSecondLargestNumber(arr)
{
    let i;
    let largest = second = -2454635434;

    for (i = 0; i < arr.length; i++) {
        if (arr[i]>largest) {
            largest = arr[i];
        }
    }

    for (i = 0 ; i < arr.length; i++){ 
        if (arr[i] > second && arr[i] < largest){
            second = arr[i];
        }
    }

    if (second == -2454635434){
        return -1;
    }
    else{
        return second;
    }
}

console.log(findSecondLargestNumber([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]));