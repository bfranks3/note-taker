//dependencies
const router = require('express').Router();

const { filterByQuery, findByTitle, createNewNote, validateNotes } = require('../../lib/notes');
const { notes } = require('../../data/notes');

//get routes
router.get("/api/notes", (req, res) => {
    return res.json(notes)
})

router.get("/api/notes/:id", function (req, res) {
    res.json(notes[req.params.id]);
});

//post
router.post("/api/notes", (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.delete("/db/:id", (req, res) => {
    const noteId = req.params.id;
  
    notes.forEach((n, index) => {
      if(noteId == n.id){notes.splice(index,1)
  
        const notesCopy = notes.slice();
        
        const jsonNotes = JSON.stringify(notesCopy)
  
        fs.writeFile("./db/db.json", jsonNotes, function(error) {
          if (error) {
            return console.log(error);
          }
          console.log("Note Deleted");
        })
  
      }
    })
    res.json(notes);
  })