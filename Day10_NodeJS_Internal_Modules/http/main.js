const http = require('http');
const fsPromises = require("fs/promises");

const app = http.createServer(async (req, res)=>{
    // console.log(Object.keys(req));
    // res.write('Welcome 123');
    // res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200, {'Content-Type': 'text/html'});
    const route = req.url;
    switch(route){
        case "/":{
            const stream = await fsPromises.readFile('./pages/homepage.html');
            res.end(stream);
            break;
        };
        case '/products':{
            const stream = await fsPromises.readFile('./pages/products.html');
            res.end(stream);
            break;
        };
        default:{
            res.end('Oops! Page not found...');
        }
    }
    
});

// http://localhost:1400
app.listen(1400, ()=>{
    console.log("----------Server Started ----------");
});

