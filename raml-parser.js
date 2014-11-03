#!/usr/bin/env node

var raml = require('raml-parser');
var fs = require("fs");
var colors = require("colors");

if(process.argv.length < 3){
    console.error("Error".red, "Not enough parameters".cyan);
    console.error("usage:", "ramlparser".blue, "input.raml".green);
    process.exit(-1);
}

var input_file = process.argv[2];

if(input_file=="" || !fs.existsSync(input_file)){
    console.error("Error".red, "Invalid or empty input file".cyan, input_file);
    process.exit(-1);
}
else{
	console.log("Parsing".cyan, input_file, "...".cyan);
	raml.loadFile(input_file).then(function(data) {
	    console.log("your RAML file is correct!".green)
	}, function(error) {
	    console.error("Error while parsing your file".red, error.message.cyan);
	});	
}


