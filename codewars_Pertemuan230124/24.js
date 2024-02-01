function threeInOne(arr){
    var newArr = arr.slice();
    var arrs = []
    for (var i=0;i<arr.length/3;i++) {    
      arrs.push(newArr.splice(0,3).reduce(function(a, b) { return a + b; }, 0))
    }
    return arrs; 
  }