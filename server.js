// Section 2.4 Express
import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express();
server.set('view engine', 'ejs');

// routing 
server.get('/', (req, res) => {
    res.render('index', {
        content: '...'
    });
});

server.use('/api', apiRouter);
// 1st way -- the magic way
server.use(express.static('public'));

server.listen(config.port, ()=> {
    console.info('Express is listening to the port ', config.port);
});











