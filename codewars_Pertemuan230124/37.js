function countAnimals(animals,count) {
    let result = [];
    
    for (let i of count) {
      result.push(animals.split(i).length - 1);
    }
    
    return result;
  }