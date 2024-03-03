const fs = require('fs');
const path = require('path');
const cors = require('cors');
const express = require('express');
const filePath = path.resolve(__dirname, 'models/users.json');
const app = express();
//const axios = require('axios');
app.use(express.json());


app.use(cors());
async function fetchDataUsingFs() {
    try {
       // console.log(filePath);
        // Read file synchronously
        const data = fs.readFileSync(filePath, 'utf8');
        console.log("Hello")
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

async function getUsers(req, res) {
    try {
        const data = await fetchDataUsingFs();
        const userdata = JSON.parse(data).users;
         console.log(userdata);
        return userdata;
    } catch (error) {
        return error.message;
    }
};

async function findUsers(req,res){

    const data = req.body;
    console.log('Received data from client:', data);

   try {
   // const userDataResponse = await axios.get("http://localhost:3000/api/getUser");
        const userData = await getUsers(); // Access the data property of the Axios response
        console.log(userData);
        if (data.hasOwnProperty('username') && data.hasOwnProperty('password')) {
            const filterData = userData.filter((user) => user.username == data.username && user.password === data.password);
            if (filterData.length > 0) {
                console.log(filterData);
                return res.json(filterData);
               
            } else {
                return res.status(500)({ error: "User not found or incorrect credentials" });
            }
        } else {
            return res.json({ error: "Invalid request body" });
        }
    
   } catch (error) {
    
    console.error("Error fetching user data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
   }
};





 module.exports = { getUsers , findUsers};

