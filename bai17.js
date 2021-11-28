function findMin(a,b,c){
    let min = a; 
    if (min > b)
    {
        min = b;
    }
    if (min > c)
    {
        min = c;
    }
    return min;
}

function findMax(a,b,c){
    let max = a;
    if (max < b)
    {
        max = b;
    }
    if (max < c)
    {
        max = c;
    }
    return max
}

console.log("max:", findMax(2, 4, 7) + " mix:", findMin(2, 4, 7));