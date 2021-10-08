const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(express.json());

const userList = [
{
    name : "Dinesh", 
    age : 28,
    id : 1
},
{
    name : "Kumar",
    age : 29,
    id = 2
},
]

app.post("/api/user/create", (request, responce) => {
    let user = request.body;
    user.id = userList.length + 1;
    
    userList.push(user);
    responce.status(200).send({
        message : "successfully created the user profile"

    })
});

app.put("/api/user/edit/:id", (request, responce) => {
    let id = request.params.id;
    let index = userlist.findIndex((value) => {
        return value.id == id;
});

if(index < 0){
    responce.status(401).send({
        message : "Invalid ID number"
    });
    return;
}

userList[index].name = request.body.name;
userList[index].age = request.body.age;

responce.status(200).send({
    mesage : "Successfuly Updated the user information"
 })
 
});


app.delete("/api/user/delete/:id", (request,responce) => {
    let id = request.params.id;
    let index = userList.findIndex((value) => {
    return value.id == id;
    });
   
    if(index < 0){
        responce.status(401).send({
            message : "Invalid ID number"
        });
        return;
}

userList.splice(index,1);
responce.status(200).send({
    message : "User profile hasbeen deleted successfully"
})
});

const port = process.env.PORT || 8080;
http.listen(port, () => {
    console.log("Node js server is running on port 8080")
})
