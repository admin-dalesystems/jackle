var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
<<<<<<< HEAD
    res.end('Jackle');
=======
    res.end('Hello, world! - Jackle');
>>>>>>> 63b77b9ed1954a63b23d482090b93101cb175474
    
}).listen(process.env.PORT || 8080);
