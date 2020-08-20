// application variable
require('dotenv').config();

// native node module
const path = require('path');

// express server module
const express = require('express');

// middleware module
const bodyParser = require('body-parser');

// route module
const categoryRoutes = require('./routes/category');

// create express server
const app = express();

// set server port from dotenv file
const port = process.env.PORT || 3000;

// set templating engine
app.set('view engine', 'pug');

// use express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// use route
app.use(categoryRoutes);

// use 404 error page
app.use((req, res) =>
    res.status(404).render('404', { pageTitle: 'Page Not Found' })
);

// start server
app.listen(port, () => console.log(`Rockin' like Dokken on port ${port}!!!`));
