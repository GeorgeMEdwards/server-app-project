const express = require('express');
const path = require('path');

const app = express ();

//for body parser.
app.use(express.urlencoded({extended : false}));




//serve static files.
app.use(express.static(path.join(__dirname, 'public')));


//  template enginie
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Server the index page
app.get('/', function(req, res){
    res.render('index');
});

//setting up the server
app.listen(3000, () => {
    console.log('Server is running on port 3000....');

});
module.exports = app;