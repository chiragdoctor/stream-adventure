var concat = require('concat-stream');


process.stdin
		.pipe(concat (function (buf) {
			var line = buf.toString().split('').reverse().join('') + '\n';
			process.stdout.write(line);
		}));