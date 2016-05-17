#!/usr/bin/env node

var RED = require('node-red');
var main = require('node-red-contrib-scenes');
main.start(RED, {port:1880});
