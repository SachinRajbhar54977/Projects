const fs = require('fs');
const path = require('path');
 const filepath = path.resolve(__dirname, 'models/users.json');

 async function fetchDataUsingFs(){
    try{
        // read file synchronously
        const data = fs.readFileSync("./users.json", "utf8");
       // console.log(data);
     return data;
            
    }catch(error){
    
      console.error('Error in fetching data:');
    }
 }
async function getUsers(req,res){
    try{
        const data = await fetchDataUsingFs();
        const userdata = JSON.parse(data).users;
        return res.json(userdata);
    }catch(error){
        return error.message;
    }
}

module.exports ={getUsers};