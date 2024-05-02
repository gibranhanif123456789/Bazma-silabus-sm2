const jwt = require('jsonwebtoken');
const payload = {
    Name:"Hanif",
    address: "Serang Banten",
    contact: "08194224982",
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) 
};

function createRegistrationToken(fullName, addres, contactNumber) {
    const secretKey = 'rahasia'; 
    const token = jwt.sign(payload, secretKey);
    return token;
}

console.log(createRegistrationToken(payload.fullName, payload.address, payload.contact));



