const path = require("path");
const router = require("express").app();

//notes route
app.get('/notes', function (req, response) {
    response.sendFile(path.join(__dirname, '../public/notes.html'));
});

//index route
app.get('*', function (req, response) {
    response.sendFile(path.join(__dirname, '../public/index.html'));
});
