# Habanero Prototype Boilerplate [![devDependency Status](https://david-dm.org/habaneroconsulting/habanero-prototype-boilerplate/dev-status.svg)](https://david-dm.org/habaneroconsulting/habanero-prototype-boilerplate#info=devDependencies) [![Build status](https://travis-ci.org/habaneroconsulting/habanero-prototype-boilerplate.svg)](http://travis-ci.org/habaneroconsulting/habanero-prototype-boilerplate)

A simple boilerplate to start off prototyping. Built with HTML5 Boilerplate, Normalize, Twitter Bootstrap, Assemble, and Grunt.

## Build Instructions

1. Install [NodeJS](http://nodejs.org/).

2. Run `npm install` at the root project folder.

    This will read the *package.json* file and pull in all required node modules and put into a directory called *node_modules*.

3. Use `npm` to build:

    - `npm run build` will create a debug/test version of the site
    - `npm run production` will create a production version of the site (i.e. JavaScript and CSS concatenated and minified)
    - `npm start` will create the debug/test version of the site, then create a simple testing server
    - `npm run bower` will download the latest front end packages to the bower_components folder and copy them into the corresponding vendor folders. This will overwrite any changes.
