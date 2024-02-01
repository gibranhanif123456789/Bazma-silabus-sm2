function maxMin(a,b){
    let mn = Math.abs(a[0]-b[0]);
    let mx = mn;
    
    for (let i=1; i<a.length; ++i) {
      const diff = Math.abs(a[i]-b[i]);
      mn = Math.min(mn, diff);
      mx = Math.max(mx, diff)
    }
    
    return [mx,mn];
  }