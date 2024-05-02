const jwt = require('jsonwebtoken');
const seccretkey = 'smktibazma';
const playload = {userId : 1, name: "Hanif GS", Kelas:"XI"};

const generateToken = jwt.sign(playload , seccretkey);
console.log(generateToken);