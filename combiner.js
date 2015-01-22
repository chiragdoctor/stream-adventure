/*  #####################################################################
  ##                        ~~  COMBINER  ~~                         ##
  #####################################################################
*/
var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function () {
	var group = through (write, end);
	var current;

	function write (line) {
		if (line.length === 0 ) return;

		var l = JSON.parse(line);

		if(l.type === "genre"){
			if (current) {
				this.queue(JSON.stringify(current) + '\n');
			}

			current = {name : l.name, books : [] };
		}
		else {
			current.books.push(l.name);
		}
	}

	function end (){
		if (current) {
				this.queue(JSON.stringify(current) + '\n');
			}
			this.queue(null);
	}

	return combine(split(), group, zlib.createGzip());
};
