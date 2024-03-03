
const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const users = require('./src/user');
app.use(express.json());


app.use(cors());
// app.get('/', function(req,res){
//     res.send('Hello World');
// })

//app.get('/api/users', users.getUsers);

app.post('/api/login',users.findUsers);

app.listen(process.env.port,()=>{
    console.log("listening on port", process.env.port);
})