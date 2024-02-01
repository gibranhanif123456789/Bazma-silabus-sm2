function sortIt(arr){
    ar = arr.slice()
    ar.sort((x,y) => {
      nx = 0;
      ny = 0;
      for (i of arr) {
        if (i == x) nx++;
        if (i == y) ny++;
      }
      if (nx > ny) return(1);
      if (nx < ny) return(-1);
      if (nx == ny) return(y-x)
    })
    return(ar)
  }