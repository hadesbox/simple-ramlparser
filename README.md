Simple-CLI-ramlparser
=================

A simple implementation of a raml parser with the raml-js library.

To install it simply run 

  $ sudo npm install -g 
  
this will fetch all packages (npm install), and create the executable to your PATH (ramlparser). Then you can globally call the parser like this

  $ ramlparser spec.raml
  $ ramlparser /path/to/spec.raml

Alternatively you can manually install it by

  $ npm install

and then execute it as:

$ ./raml-parser.js /path/to/spec.raml

# Requirements

You need to have nodejs installed (and npm) to build this program libraries.
