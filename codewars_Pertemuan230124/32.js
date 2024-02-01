function roundIt(n) {
    var [a, b] = String(n).split('.').map(s => s.length);
    if (a < b) return Math.ceil(n);
    if (a > b) return Math.floor(n);
    return Math.round(n);
}