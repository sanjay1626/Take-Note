const express = require('express');

const app = express();


app.get('/', (req,res) => {
    res.send("Hello WOrld, FIghting from Nodemon and express, Hop i can do this right");
})





//PORT Listen using environment varialbles
const port = process.env.PORT || '8080';

app.listen(port, () => 
    console.log(`Listening to port ${port}`)
);