function padIt(str,n){
    let result = str, i = 0;
    while (i < n) {
        if(i % 2 === 0) result = `*${result}`
        else result = `${result}*`
        i++
    }
    return result;
}