function howManySmaller(arr,n){
    var count = 0;
  
    arr = arr.map(function(x){
      return x.toFixed(2);
    });
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < n) {
        count++;
      }
    }
    return count;
  }