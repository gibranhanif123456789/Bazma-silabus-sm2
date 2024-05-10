const connection = require('../config/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(name, email, password, phone){
    try{
        const [existingUser] = await connection.query('SELECT * FROM user WHERE email = ?', [email]);
            if(existingUser.length>0){
                throw new Error('Email alredy exist')
            }
            // hash password biar ga bisa di baca
            const hasheadPassword = await bcrypt.hash(password,16);
            // bikin usser baru
            const [newUser] = await connection.query('INSERT INTO user (name, email, password) VALUES (?, ?, ?)', [name, email, hasheadPassword]);
            return {success:true,message : 'user created succesfully', data :{ id: newUser.insertId, name, email, phone } };
        }catch (error){
            throw new Error(error)
        }
    }
    async function loginUser(email, password) {
        try {
          const [user] = await connection.query('SELECT * FROM user WHERE email = ?', [email]);
          if (user.length === 0) {
            throw new Error('User not found');
          }
          const isPasswordValid = await bcrypt.compare(password, user[0].password);
          if (!isPasswordValid) {
            throw new Error('Invalid password');
          }
          // generate token
          const createToken = jwt.sign({ email: user[0].email, password: user[0].password }, 'bazmaSecretKey');
          return { success: true, message: 'Login successful', createToken };
        } catch (error) {
          console.error(error);
          return { success: false, message: error.message };
        }
      }

      async function getMe(token) {
        try {
            const decoded = jwt.verify(token.replace('Bearer ', ''), 'bazmaSecretKey');
            const userdata = {
                id: decoded.id,
                username: decoded.username,
                email: decoded.email
            };
    
            return { success: true, message: 'User data retrieved', data: userdata };
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
    
    module.exports = {registerUser,loginUser,getMe}

