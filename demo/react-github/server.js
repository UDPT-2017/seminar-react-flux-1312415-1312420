var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();


app.engine('hbs', exphbs());
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/*', function (req, res){
    res.render('index');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
