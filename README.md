# Habanero Prototype Boilerplate [![devDependency Status](https://david-dm.org/habaneroconsulting/habanero-prototype-boilerplate/dev-status.svg)](https://david-dm.org/habaneroconsulting/habanero-prototype-boilerplate#info=devDependencies)

A simple boilerplate to start off prototyping. Built with HTML5 Boilerplate, Normalize, Twitter Bootstrap, Assemble, and Grunt.

## Build Instructions

1. Install [NodeJS](http://nodejs.org/).

2. Install the Grunt CLI.

        npm i grunt-cli -g

3. Run `npm install` at the root project folder.

    This will read the *package.json* file and pull in all required node modules and put into a directory called *node_modules*. This directory is generated so it can be deleted and should not be checked into source control. If deleted, running `npm install` will re-create it.

4. Use `grunt` to build:

    - `grunt build` will create a debug/test version of the site
    - `grunt production` will create a production version of the site (i.e. JavaScript and CSS concatenated and minified)
    - `grunt serve` will create the debug/test version of the site, then create a simple testing server. It also turns on `watch` which waits for file updates and runs the appropriate build tasks (e.g. on a LESS file update, it will re-compile the CSS files)
