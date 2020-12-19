const express = require('express');
const path = require('path');
const app = express();
//PORT Listen using environment varialbles
const port = process.env.PORT || '8080';



// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make public folder accessible
app.use(express.static(path.join(__dirname,"/public")));


require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);






//Listen
app.listen(port, () => 
    console.log(`Listening to port ${port}`)
);