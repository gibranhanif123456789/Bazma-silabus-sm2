function countGrade(scores) {
    var count = f => scores.filter(v => f(v)).length;
    return {
      S: count(v => v == 100),
      A: count(v => v < 100 && v >= 90),
      B: count(v => v < 90 && v >= 80),
      C: count(v => v < 80 && v >= 60),
      D: count(v => v < 60 && v >= 0),
      X: count(v => v == -1)
    }
  }