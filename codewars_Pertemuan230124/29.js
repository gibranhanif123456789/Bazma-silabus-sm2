function bigToSmall(arr){
    let res = arr.flat()
    let bigToSmallArray = res.sort((a,b) => b-a)
    return bigToSmallArray.join('>')
}  