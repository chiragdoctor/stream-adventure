var websockets = require('websockets-streams');
var stream = websockets('ws://localhost:8000');

stream.write("hello\n");
strean.end();