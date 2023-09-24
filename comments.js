// Create web server
// Create a route for the home page
// Create a route for the about page
// Create a route for the contact page
// Create a route for the comments page
// Create a route for the add comment page
// Create a route for the delete comment page
// Create a route for the edit comment page
// Create a route for the add comment form
// Create a route for the delete comment form
// Create a route for the edit comment form
// Create a route for the 404 page
// Create a route for the 500 page
// Start the web server

// Load the modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Configure the app
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Mount the middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/comments', function(req, res) {
    res.render('comments');
});

app.get('/comments/add', function(req, res) {
    res.render('add-comment');
});

app.get('/comments/delete', function(req, res) {
    res.render('delete-comment');
});

app.get('/comments/edit', function(req, res) {
    res.render('edit-comment');
});

app.post('/comments/add', function(req, res) {
    res.render('add-comment-form');
});

app.post('/comments/delete', function(req, res) {
    res.render('delete-comment-form');
});

app.post('/comments/edit', function(req, res) {
    res.render('edit-comment-form');
});

app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

app.use(function(req, res) {
    res.status(500);
    res.render('500');
});

// Start the webserver
app.listen(3000, function() {
    console.log('Listening on port 3000');
});