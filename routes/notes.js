const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI notes
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, noteText } = req.body;

    if (req.body) {
        const newNote = {
            title,
            noteText,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error adding note');
    }
});

module.exports = tips;
