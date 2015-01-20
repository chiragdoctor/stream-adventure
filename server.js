var http = require('http'),
    through = require('through');

function transform(buf) {
    this.queue(buf.toString().toUpperCase());
}

function handler(req, res) {
    if(req.method !== 'POST') {
        res.end('POST me something');
        return;
    }

    req.pipe(through(transform)).pipe(res);
}

http.createServer(handler).listen(3000);
