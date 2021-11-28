function findId(str) {
    let n = "";
    for(let i = str.length-1; i >= 0; i--){
        if(str[i] =='/'){
            n = str.slice(i+1);
            break;
        }
    }
    return n;
}

console.log(findId("https://www.facebook.com/ngothucdat"));