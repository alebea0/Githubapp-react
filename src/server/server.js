import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
    const initialMarkup = ReactDOMServer.renderToString(<App />);

    res.send(`
    <html>
        <head>
            <title>GitHub Cards App</title>
        </head>
        <body>
            <div id="root">${initialMarkup}</div>
            <script src="/main.js"></script>
        </body>
    </html>
 `)
});

server.listen(4242, () => console.log("Servidor en ejecución…"))