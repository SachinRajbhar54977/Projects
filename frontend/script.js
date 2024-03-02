if(localStorage.getItem('token') && localStorage.getItem('token') !== undefined){
    document.getElementById('loginform').style.visibility = "hidden";
}

async function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

alert(`username : ${username}  password : ${password}`);
await fetch('http://localhost:3000/api/login', {
    method :"POST",
    headers :{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
})
.then(response =>{
    if(!response.ok){
        throw new error('Authentication failed');
    }
    return response.json();
})
.then(data=>{
    alert('login successful');
    console.log(data);
    window.location.href = "./QuizGame.html";
  
    if(!localStorage.getItem('token') || localStorage.getItem('token') === undefined ){
      localStorage.setItem("token", data.id);
      localStorage.setItem("name", data.username);


      
   // <iframe src="QuizGame.html" frameborder="0" width="100%" height="500"></iframe>
      // redirect the user to the first page

    }
  
})
.catch(error=>{
    alert('Authentication failed');
});

}