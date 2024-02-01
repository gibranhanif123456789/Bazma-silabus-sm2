const findSimilarity = (str, word) => {
    const regStr = word
      .replace(/./g, '.')
      .replace(/^./, word[0])
      .replace(/.$/, word.slice(-1))
    const reg = new RegExp(`^${regStr}$`)
  
    return str
      .split(/ /)
      .filter(val => reg.test(val))
      .join(' ')
  }