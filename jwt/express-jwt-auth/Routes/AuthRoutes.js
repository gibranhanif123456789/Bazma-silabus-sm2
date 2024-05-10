const express = require('express');
const router = express.Router();
const VerifyToken = require('../Middleware/VerifyToken')

const {register ,login, Me} = require('../controller/Authcontroller');

router.post('/register',register)
router.post('/login', login);
router.get('/me', VerifyToken, Me);



module.exports = router

// localhost:3000/api/auth/register