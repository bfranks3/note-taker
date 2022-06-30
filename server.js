const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path')


//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '.public/assets/notes.html'));
});
//listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}) 