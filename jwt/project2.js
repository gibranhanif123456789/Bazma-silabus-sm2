const jwt = require('jsonwebtoken');
const secretKey = 'rahasia'; 
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiSGFuaWYiLCJhZGRyZXNzIjoiU2VyYW5nIEJhbnRlbiIsImNvbnRhY3QiOiIwODE5NDIyNDk4MiIsImV4cCI6MTcxNDcyNDYwNSwiaWF0IjoxNzE0NjM4MjA1fQ.MaJ3gvUkHD0Wb5fEkjGK1dJ3h9otOSscHkg7mXsiHGU"
jwt.verify(token,secretKey,(err,decoded)=>{
    if(err) {console.error(err);}
    else {console.log("Token is Valid"); console.log(decoded)};
});