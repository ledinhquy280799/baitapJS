function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(l) {
        return l.toUpperCase();
    });
}

console.log(titleCase("NguyeN THI tho tHu hA"));;