const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./db/connections'); 

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const PORT = 6000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

// get data todos
app.get('/api/todos',(req,res)=>{
    database.query('SELECT * FROM todo',(err,result)=>{
        if(err)throw err;
        res.json({
            message : 'succes',
            data : result
        },200);
    })
})

// ()=>{}
// POST menambahkan data baru todo =localhost 
app.post('/api/todos',(req,res)=>{
    const {title,description} = req.body;
    database.query('insert into todo (title, description) values(?,?)',[title,description],(err,result)=>{
        if(err) throw err;
        res.json({
            message: 'succes created todo'
        },201)
    })
})