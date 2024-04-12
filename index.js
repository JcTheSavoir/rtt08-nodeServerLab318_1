const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    // res.write('<a href="http://127.0.0.2:3000">Next World</a>')
    switch (req.url) {
      case "/":
        // res.write("Hello World");
        break;
      case "/test":
        res.write("You've reached the test endpoint.");
        break;
      default:
        res.statusCode = 404;
        res.write("Error: 404 Not Found");
        break;
    }
    res.end();
  });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});






/* //Creating multiple servers below 
const hostnameTwo = '127.0.0.2';
const portTwo = 3000;

const serverTwo = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Next World!</h1>');
    res.write('<p>I guess we can send this??...</p>')
    res.write('<a href="http://127.0.0.3:3000">Final World</a>');
    res.end();
  });

serverTwo.listen(portTwo, hostnameTwo, () => {
    console.log(`Server running at http://${hostnameTwo}:${portTwo}/`);
});

const hostnameThree = '127.0.0.3';
const portThree = 3000;

const serverThree = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Final World!</h1>');
    res.write('<p>We can even do this??...</p>');
    res.write('<a href="http://127.0.0.1:3000">Lets go back to our first World</a>');
    res.end();
  });

serverThree.listen(portThree, hostnameThree, () => {
    console.log(`Server running at http://${hostnameThree}:${portThree}/`);
});
*/