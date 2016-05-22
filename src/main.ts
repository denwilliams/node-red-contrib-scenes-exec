/// <reference path="../node_modules/node-red-contrib-scenes/node-red-contrib-scenes.d.ts"/>

var RED = require('node-red');
import main = require('node-red-contrib-scenes');
main.start(RED, {port:1880});
