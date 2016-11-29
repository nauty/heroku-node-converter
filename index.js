
var express = require("express");
var app = express();
var converter  = require("./converter")

app.get('/myapp/csv2json',converter);

app.listen(7879, function () {
	console.log("listening to port 7879");
});
