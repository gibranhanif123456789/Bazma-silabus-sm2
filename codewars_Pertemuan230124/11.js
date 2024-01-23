const grabDoll = dolls => {
    const bag = [];
    for (const doll of dolls) {
      if (bag.length === 3) break;
      if (doll !== `Hello Kitty` && doll !== `Barbie doll`) continue;
      bag.push(doll);
    }
    return bag;
  };