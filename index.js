let express = require('express');
let path = require('path');

//variabele aanmaken van het type express
let app = express();

//aan de applicatie vertellen dat we werken met views
app.set("views", path.resolve(__dirname, 'views'));
//werken met EJS
app.set("view engine", "ejs");

app.use(express.static('public'));

const kunstwerk = require('./data/werken.json');

//inhoud op het scherm plaatsen
app.get("/", function(request, response){
  // response.send("Hallo wereld!");
  response.render("home", {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: kunstwerk.kunst
  });
});

app.get("/werken", function(request, response){
  // response.send("Hallo wereld!");
  response.render("werken", {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: kunstwerk.kunst
  });
});

app.get("/popart", function(request, response){
  // response.send("Hallo wereld!");
  response.render("popart", {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: kunstwerk.kunst
  });
});

app.get("/symbolisme", function(request, response){
  // response.send("Hallo wereld!");
  response.render("symbolisme", {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: kunstwerk.kunst
  });
});

app.get("/realisme", function(request, response){
  // response.send("Hallo wereld!");
  response.render("realisme", {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: kunstwerk.kunst
  });
});

app.get("/romantisch", function(request, response){
  // response.send("Hallo wereld!");
  response.render("romantisch", {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: kunstwerk.kunst
  });
});

app.get("/contact", function(request, response){
  response.render("contact");
});

app.get('/werken/:postid', function(req,res){
  res.render('detail', {
    post: kunstwerk.kunst[req.params.postid]
  });
});

//404 - Catch Hallo
app.use(function(request,response){
  response.statusCode = 404;
  response.end("404! Niets gevonden");
});

//Heroku poort instellingen
app.set('port', (process.env.PORT || 5000));
//webserver activeren
app.listen(app.get('port'));
