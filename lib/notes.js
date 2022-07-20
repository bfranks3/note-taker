const fs = require('fs');
const path = require('path');

function findById(id, notesArr) {
    const result = notesArr.filter(note => note.id === id)[0];
    return result;
};

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return note;
};
function validateNotes(note) {
    if (!note.name || typeof note.title !== "string") {
      return false;
    }
    if (!note.task || typeof note.task !== "string") {
        return false;
    }
    return true
}
module.exports = {
    filterByQuery,
    findByTitle,
    createNewNote,
    validateNotes
  };