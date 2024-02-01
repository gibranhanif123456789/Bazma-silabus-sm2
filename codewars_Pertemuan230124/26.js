function isolateIt(arr) {
    return arr.map(a => {
      const n = a.length, h = n >> 1;
      return a.slice(0, h) + '|' + a.slice(h + (n & 1));
    });
  }