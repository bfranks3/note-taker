//dependencies
const router = require('express').Router();

const { filterByQuery, findByTitle, createNewNote, validateNotes } = require('../../lib/notes');
const { notes } = require('../../data/notes');

//get routes
app.get("/api/notes", (req, res) => {
    return res.json(notes)
})

app.get("/api/notes/:id", function (req, res) {
    res.json(notes[req.params.id]);
});

//post
app.post("/api/notes", (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});
