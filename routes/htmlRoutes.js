// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get('/', (req,res) => {
    res.send("Hello WoRld, Fighting from Nodemon and express, Hope i can do this right!!");

})
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //// If no matching route is found default to home
  //giving an err it wont allow to display /api/notes when this is used??
  //app.get("*", function(req, res) {
  //  res.sendFile(path.join(__dirname, "../public/index.html"));
  //});
};
