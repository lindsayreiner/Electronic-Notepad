const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js')
const htmlRoutes = require('./routes/htmlRoutes.js')

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Tells express where to find front end CSS and JS files
app.use(express.static('public'));

app.use(apiRoutes);

app.use(htmlRoutes);


//Activates localhost to listen at the assigned PORT
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

