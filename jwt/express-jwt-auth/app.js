const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

// const {AuthRoute} = require('./Routes/AuthRoutes');
// const { register } = require('./controller/Authcontroller');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


// AuthRoute
const AuthRoute = require('./Routes/AuthRoutes')
app.use("/api/auth",AuthRoute)
// app.use('/api/auth/register',register)
// app.use('/api/auth/',AuthRoute)

const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`sever is running on port${PORT}`);
})