const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

// app.get('/', function(req, res) {
//     res.send("Hello World");
// });

// __dirname gives the current directory 
// __dirname + file name gives the path for the computer to reach proper file
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});


// when client reaches site/bmicalculator - it loads up the html
app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);

    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
});

app.listen(port, function() {
    console.log("Server is running on " + port);
});

