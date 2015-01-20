var through = require("through");
var th = through(write);

process.stdin.setEncoding("utf8");

function write(buf) {
	this.queue(buf.toUpperCase());
}

function end(){
	console.log("___END___");
}

process.stdin.pipe(th).pipe(process.stdout);