function splitAndMerge(str, sp) {
    const words = str.split(' ');
    const arr = [];
  
    for (let i = 0; i < words.length; i += 1) {
      arr.push(words[i].split('').join(sp));
    }
    return arr.join(' ');
  }