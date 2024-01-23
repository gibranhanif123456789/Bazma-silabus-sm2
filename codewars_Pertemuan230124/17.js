function firstToLast(str,c){
    var firstIndex = str.indexOf(c);
    var lastIndex = str.lastIndexOf(c);
    if (firstIndex === -1) {return -1}
    else {return lastIndex-firstIndex}  
  }