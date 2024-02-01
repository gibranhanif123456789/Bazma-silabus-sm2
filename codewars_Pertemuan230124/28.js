function mirrorImage(arr){
    //coding here...
    
    let a, b;
    
   let  check = arr.some((x,i) => {
        a = arr[i];
        b = arr[i+1];
    return a === Number(String(b).split('').reverse().join(''));
    
    });
    
    return check ?[a,b]:[-1,-1];
    
  }