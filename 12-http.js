const http = require('http');

const server = http.createServer( (req, res)=>{
    console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our Homepage')
    }
    if(req.url === '/about'){
        res.end('Welcome to about page')
    }
    // res.end(`<h1>Ooops!</h1>
    // <p>We can't seem to find the page you request for</p>
    // <a href="/">Back Home</a>`)
})

server.listen(5000);