// Section 2.4 Express
import express from 'express';
import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
  }));

server.set('view engine', 'ejs');

import serverRender from './serverRander';

// routing 
server.get('/', (req, res) => {
    serverRender()
    .then(content => {
        res.render('index', {
            content
        });
    })
    .catch(console.error);

    
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, ()=> {
    console.info('Express is listening to the port ', config.port);
});











