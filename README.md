Simple-CLI-ramlparser
=================

A simple implementation of a raml parser with the raml-js library.

To install it simply run 
```
  $ sudo npm install -g 
```
this will fetch all packages (npm install), and create the executable to your PATH (ramlparser). Then you can globally call the parser like this

```
  $ ramlparser spec.raml
  $ ramlparser /path/to/spec.raml
```
Alternatively you can manually install it by

```
  $ npm install
```

and then execute it as:
```
  $ ./raml-parser.js /path/to/spec.raml
```

# !includes

Remember that the __!include__ command be used to split RAML files... this means that if you use web-hosted files (and since you are running this command locally) your RAML file should have absolute paths to the URLS with the includes.  If your RAML has local file includes, be sure to download them to your hard drive and to put them on the right folders before parsing your RAML spec file.


# Requirements

You need to have nodejs installed (and npm) to build this program libraries.
