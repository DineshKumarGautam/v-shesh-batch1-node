const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(express.json());

const userList = [
{
    name : "Dinesh",
    age : 27
},
{
    name : "DineshKumar",
    age : 28
},
{
    name : "Dk",
    age : 29
},
]

app.get("/api/users",(request, responce) => {
    responce.status(200),send(userList);
});

const port = process.env.PORT || 8080;
http.listen(port, () => {
    console.log("Node js server is running on port 8080")
})
