const notesdb = require("../db/db");
const path = require('path');

module.exports = function (app) {
    //GET should read db.json::
    app.get('/api/notes/', (req, res) => {

        res.sendFile(path.join(__dirname, "../db/db.json"));
        res.send(notesdb);
    })
    //POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    app.post('/api/notes', (req, res) => {
        if (!req.body.title || req.body.length < 3) {
            res.status(400).send("Characters less than three")
            return;
        }

        let newnotes = {
            //adds id here 
            id: notesdb.length + 1,
            title: req.body.title,
            text: req.body.text
        }
        notesdb.push(newnotes);
        console.log("Note saved to db.json. Content: ", newnotes);
        res.send(newnotes);

    });

    app.delete('/api/notes/:id', (req, res) => {
        let newNotes = notesdb.find(c => c.id === parseInt(req.params.id));
        if (!newNotes) res.send(`No notes founded boy : ${req.params.id}`);

        const index = notesdb.indexOf(newNotes);
        notesdb.splice(index, 1);
        
        res.send(newNotes);
        console.log("Note deleted from db.json. Content: ", newNotes);
    });

};
