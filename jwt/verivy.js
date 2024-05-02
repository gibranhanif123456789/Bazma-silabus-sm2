const jwt = require('jsonwebtoken');
const seccretkey = 'smktibazma';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJIYW5pZiBHUyIsIktlbGFzIjoiWEkiLCJpYXQiOjE3MTQ2MzMwODR9.92rzwTJ25TCVQGjTS6qAs4bmqNLrdDW4WoTQINO2k8E";

jwt.verify(token,seccretkey,(err,decoded)=>{
    if(err) {console.error(err);}
    else {console.log("Token is Valid"); console.log(decoded)};
});