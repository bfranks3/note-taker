const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
    let taskArray = []
    let filteredResults = notesArray;
    if (query.task) {
        if (typeof query.task === "string") {
            taskArray = [query.task]
        } else {
            taskArray = query.task
        }
        taskArray.forEach(task => {
            filteredResults = filteredResults.filter(
                note => note.task.indexOf(task) !== -1
            );
        });
    }
    if (query.title) {
        filteredResults = filteredResults.filter(
            (notes) => notes.title === query.title
        );
    }
    if (query.text) {
        filteredResults = filteredResults.filter(
            (notes) => notes.text === query.text
        );
    }
    return filteredResults;
}
function findByTitle(title, notesArray) {
    const result = notesArray.filter((notes) => notes.title === title)[0];
    return result;
  }
  function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../data/notes.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    )

    return note;
}
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