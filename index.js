const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

let temperature = 28;

if (process.env.TEMPERATURE) {
    temperature = process.env.TEMPERATURE;
}


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(/*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Temperature</title>
    </head>
    <body>
        <h1>Temperature</h1>
        <ul>
            <li>${temperature}°C</li>
            <li>${temperature * 1.8 + 32}°F</li>
            <li>${temperature + 273.15} Kelvin</li>
        </ul>
    </body>
    </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
