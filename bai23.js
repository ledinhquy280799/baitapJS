function findNumberMaxFrequency(arr)
{
    arr.sort();
    var max=0,result,freq = 0;
    for(var i=0; i < arr.length; i++){
        if(arr[i]===arr[i+1]){
            freq++;
        }
        else {
            freq=0;
        }
        if(freq>max){
            result = arr[i];
            max = freq;
        }
    }
    return result;
}

console.log(findNumberMaxFrequency([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]));