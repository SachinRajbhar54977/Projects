// const express = require('express');
// const port = 3000;
// require('dotenv').config()
// const app = express();
// const fs = require('fs');
// const axios = require('axios');
// const cors = require('cors');
// app.use(express.json());


// app.get('/api/getUser',async(req, res)=>{
    
    
//     const data = await fetchDataUsingFs();
//     const userData = await JSON.parse(data).users;
//     console.log(userData);

//     return res.json(userData);
   
// });


// app.use(cors());

// app.post('/api/login', async (req, res) => {
//     const data = req.body;
//     console.log('Received data from client:', data);

//     try {
//         const userDataResponse = await axios.get("http://localhost:3000/api/getUser");
//         const userData = userDataResponse.data; // Access the data property of the Axios response

//         if (data.hasOwnProperty('username') && data.hasOwnProperty('password')) {
//             const filterData = userData.filter((user) => user.username == data.username && user.password === data.password);
//             if (filterData.length > 0) {
//                 console.log(filterData);
//                 return res.json(filterData);
               
//             } else {
//                 return res.status(500)({ error: "User not found or incorrect credentials" });
//             }
//         } else {
//             return res.json({ error: "Invalid request body" });
//         }
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// });



// app.listen(port, ()=>{
//     console.log("listening..",port);
// });


// async function fetchDataUsingFs() {
//     try{
//         // read file synchronously
//         const data = fs.readFileSync("./users.json", "utf8");
//        // console.log(data);
//      return data;
            
//     }catch(error){
    
//       console.error('Error in fetching data:');
//     }
//     }


const express = require('express');
require('dotenv').config();
const app = express();
const users = require('./src/models/user');

//app.use(express.json());

app.get('/', function(req,res){
    res.send('Hello World');
})

app.get('/api/users', users.getUsers);
app.listen(process.env.port,()=>{
    console.log("listening on port", process.env.port);
})