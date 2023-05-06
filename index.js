const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
const users = [

    {
        "id": 1,
        "name": "John Smith",
        "email": "sabbir@23gmail.com",
        "experience": 10,
        "recipes": 50,
        "likes": 1000
    },
    {
        "id": 2,
        "email": "rony@420gmail.com",
        "name": "Jane Doe",
        "experience": 5,
        "recipes": 20,
        "likes": 500
    },
    {
        "id": 3,
        "email": "ramim@65gmail.com",
        "name": "Peter Lee",
        "experience": 8,
        "recipes": 30,
        "likes": 700
    },



]
app.get('/', (req, res) => {
    res.send('server is comming');
})
app.get('/users', (req, res) => {
    res.send(users);
})
app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
    console.log(newUser);

})
app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})