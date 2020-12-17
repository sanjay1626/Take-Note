const express = require('express');
const path = require('path');
const app = express();
const Joi = require('joi');
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("../routes/htmlRoutes")(app);
require("../routes/apiRoutes")(app);
//PORT Listen using environment varialbles
const port = process.env.PORT || '8080';

app.listen(port, () => 
    console.log(`Listening to port ${port}`)
);