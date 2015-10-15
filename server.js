// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// DATA //
var foods =[
  {id: 0, name: "Sushiritto", yumminess: "quite"},
  {id: 1, name: "Green Eggs & Ham", yumminess: "sure"},
  {id: 2, name: "Crayfish", yumminess: "depending"},
  {id: 3, name: "Foie Gras", yumminess: "omg"},
  {id: 4, name: "Kale", yumminess: "meh"}
];

function maxId(arr) {
  var max;
  if (arr.length){ 
    max = arr[0].id;
    arr.forEach(function(food){
      if( food.id > max){
        max = food.id;
      }
    });
    return ++max;
  } else{
    max = 1;
    return max;
  }
}

//GET root
app.get('/', function(req, res){

  res.render('index',{foods:foods});
});

//POST food
app.post('/api/foods', function(req, res){
  var newFood = req.body;
  newFood.id = maxId(foods);
  //newFood.name = req.body.name;
  //newFood.yumminess = req.body.yumminess;
  console.log(newFood);
  foods.push( newFood);
  res.json(newFood);
  //res.redirect('/');
  //res.render('index', {foods:foods});
});

//DELETE food
app.delete('/api/foods/:id', function(req, res){
  var targetId = req.params.id;
  var deleted;

  res.json();
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});