const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./templates/index.html', (error, html) => {
      if (error) throw error;

      res.writeHead('200', { 'Content-Type': 'text/html' });
      res.write(html);
      res.end();
    });
  } else if (req.url === '/assets/main.css') {
    fs.readFile('./assets/main.css', (error, css) => {
      if (error) throw error;
      res.writeHead('200', { 'Content-Type': 'text/css' });
      res.write(css);
      res.end();
    });
  } else {
    fs.readFile('./templates/404.html', (error, html) => {
      if (error) throw error;
      res.writeHead('200', { 'Content-Type': 'text/html' });
      res.write(html);
      res.end();
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
