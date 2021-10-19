const router = require('express').Router();
const path = require('path');


//Tells express what front end public file to use at the root URL
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

//Tells express what public file to use at /notes
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//404 error
router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;