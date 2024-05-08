const connection = require('../config/connection');
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registeruser(name, email, password, phone){
    try{
        const [existingUser] = await connection.query('SELECT * FROM users WHERE email = ?'[email]);
            if(existingUser.length>0){
                throw new Error('Email alredy exist')
            }
            // hash password biar ga bisa di baca
            const hasheadPassword = await bycrpt.hash(password,16);
            // bikin usser baru
            const[newUser] = await connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [name, email, hasheadPassword]);
            return {success:true,message : 'user created succesfully', data :{ id: newUser.insertId, name, email, phone } };
        }catch (error){
            throw new Error(error)
        }
    }

    module.exports = {registeruser}

