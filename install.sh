#!/bin/bash

echo installing node libraries ... raml-parser
npm install

echo creating link on /usr/bin... raml-parser
ln -s $(pwd)/raml-parser.js /usr/bin/ramlparser

echo setting permissions... 
chmod +x $(pwd)/raml-parser.js

echo all done... 