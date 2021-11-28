function findposition2(s1,s2){
    let n,m = "" ;
    n = s1.lastIndexOf(s2);
    console.log(n);
    m = s1.slice(0,n);
    console.log(m);
    return m.lastIndexOf(s2);
}

console.log(findposition2("hi hi hi hi hi", "hi"));