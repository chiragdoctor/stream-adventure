var through = require('through');
var trumpet = require('trumpet');
var tr = trumpet();

var trStream = tr.select('.loud').createStream();

trStream.pipe(through(function(data){
	this.queue(data.toString().toUpperCase());
})).pipe(trStream);

process.stdin.pipe(tr).pipe(process.stdout);

