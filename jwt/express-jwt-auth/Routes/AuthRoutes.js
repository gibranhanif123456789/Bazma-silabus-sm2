const express = require('express');
const router = express.Router();

const {register} = require('../controller/Authcontroller');

router.post('/register',register)



module.exports = express.Router

// localhost:3000/api/auth/register