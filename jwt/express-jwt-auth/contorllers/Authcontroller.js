const {registeruser} = require('../models/Authmodel');
const {body, validationResult} = require('express-validator');

async function register(req,res){
    const validation = [
    body('name').notEmpty().withMessage("name is required"),
    body('email').notEmpty().isEmail().withMessage("email is required"),
    body('password').notEmpty().isPassword().withMessage("password is required"),
    body('phone').notEmpty().isPhone().withMessage('Phone is required'),
]
await Promise.all(validation.map((v)=> v.run(req)));
const errors = validationResult(req);

if(!errors.isEmpty()){
    const errMsg = errors.array().map(error =>({
        [error.path]:error.msg
    }));
    return res.status(422).json({
        status : false,
        message: "error Validation failed",
        error:errMsg
    });
}
const {name, email, password, phone} = req.body;
try{
    const result = await registeruser(name, email, password, phone);
    if(result.success){
        return  res.status(201).json({
            succes : true,
            message:result.message,
            data : result.data
        })
    }
}
catch(error){}
}

module.exports = {register}