const express = require('express');

const app = express();
const path = require('path')
app.use(express.json());
app.get('/', (req,res) => {
    res.send("Hello WOrld, FIghting from Nodemon and express, Hop i can do this right");
})

app.get('/public/notes.html', (req,res)=>{
    res.sendFile(path.join(___dirname, 'notes.html'))
})



//PORT Listen using environment varialbles
const port = process.env.PORT || '8080';

app.listen(port, () => 
    console.log(`Listening to port ${port}`)
);