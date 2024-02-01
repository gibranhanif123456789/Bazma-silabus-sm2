function shuffleIt(arr, ...rest){
    rest.forEach(function (a) {
      [arr[a[0]], arr[a[1]]] = [arr[a[1]], arr[a[0]]]
    })
    return arr
  }