const jwt = require('jsonwebtoken');
const token = require('./project3');
function verifyScheduleToken(token) {
    const secretKey = 'rahasia'; 
    try {
        const payload = jwt.verify(token, secretKey);
        return payload;
    } catch (error) {
        return "Token tidak valid atau sudah kedaluwarsa";
    }
}
console.log(verifyScheduleToken(token))