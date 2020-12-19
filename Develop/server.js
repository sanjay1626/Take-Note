const express = require('express');
const path = require('path');
const app = express();
//PORT Listen using environment varialbles
const port = process.env.PORT || '8080';



// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("../routes/htmlRoutes")(app);
require("../routes/apiRoutes")(app);






//Listen
app.listen(port, () => 
    console.log(`Listening to port ${port}`)
);