function alienLanguage(str){
    var words = str.toUpperCase().split(" ");
    for (var i = 0; i < words.length; i++) {
      var precedingChars = words[i].slice(0, -1);
      var lastChar = words[i].slice(-1).toLowerCase();  
      words[i] = precedingChars + lastChar;
    }
    return words.join(" ");
  }