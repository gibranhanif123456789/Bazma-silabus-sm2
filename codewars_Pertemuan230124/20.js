function topSecret(str){
    var arrSplit = str.split(" ");
    var arrLet = [];
    
    for(var i=0; i<arrSplit.length; i++){
      arrLet = arrSplit[i].split("");
      for(var j=0; j<arrLet.length; j++){      
        let letra = arrLet[j];
        switch(letra){
          case "A":
            arrLet[j] = "X";
          break;
          case "B":
            arrLet[j] = "Y";
          break;
          case "C":
            arrLet[j] = "Z";
          break;
          case "a":
            arrLet[j] = "x";
          break;
          case "b":
            arrLet[j] = "y";
          break;
          case "c":
            arrLet[j] = "z";
          break;
          default:
            switch(letra.toUpperCase()){
              case "A": case "B": case "C": case "D": case "E": 
              case "F": case "G": case "H": case "I":
              case "J": case"K":  case "L": case "M": case "N":
              case "Ñ": case "O": case "P": case "Q": case "R":
              case "S": case "T": case "U": case "V": case "W":
              case "X": case "Y": case "Z":
                let codLet = letra.charCodeAt()-3;
                arrLet[j] = String.fromCharCode(codLet);
              break;
            }                    
        }
        arrSplit[i] = arrLet.join("");
      }  
    }
    
    return arrSplit.join(" ");
    
  }
  //question1: The top secret file number is...
  answer1="3487";
  //question2: Super agent's name is...
  answer2="QpN";
  //question3: He stole the treasure is...
  answer3="Expired biscuits";