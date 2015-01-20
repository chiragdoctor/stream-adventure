var split = require('split');
var through = require("through");
var lineCount = 1;
    
    process.stdin
        .pipe(split())
        .pipe(through( function (line) {
            if(lineCount % 2 === 0) {
            	console	
            	this.queue(line.toString().toUpperCase() + '\n')
        	}
            else {
            	this.queue(line.toString().toLowerCase() + '\n')		
        	}	

            lineCount++;	
        }))
        .pipe(process.stdout);

/*
var split = require("split");
var through = require("through");
var lines = 1;
var th = through(write);

function write (line){
	this.queue(
		line.toString()[ 
			lines++ % 2 === 0 ? 'toUpperCase' : 'toLowerCase' ]() + '\n'); 
}

process.stdin
	.pipe(split())
	.pipe(th)
	.pipe(process.stdout);
*/

