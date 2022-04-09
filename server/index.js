const express = require('express');
const jsonWebToken = require('jsonwebtoken')
const cors = require('cors');

const app = express();

app.use(cors());

app.post('/', (req,res) => {
    console.log(req.body);
    //res.send(req.data)
})

app.listen(5000, console.log('Server is running on port 5000'));