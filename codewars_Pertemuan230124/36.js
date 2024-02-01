function rndCode() {
    var code = '';
    var firstPart = "ABCDEFGHIJKLM";
    var secondPart = "0123456789";
    var thirdPart = "~!@#$%^&*";
    
    for (var i = 0; i < 2; i++) {
      code += firstPart[~~(Math.random()*firstPart.length)];
    }
    
    for (var i = 0; i < 4; i++) {
      code += secondPart[~~(Math.random()*secondPart.length)];
    }
    for (var i = 0; i < 2; i++) {
      code += thirdPart[~~(Math.random()*thirdPart.length)];
    }
    
    return code;
  }