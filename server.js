// Chapter
// Section 2.1 content 
// import config, {nodeEnv, logStars} from './config';
// console.log(config, nodeEnv);
// logStars("Hello There!");

// Section 2.2
// import https from 'https';
// import { Chunk } from 'webpack';

// https.get("https://www.linkedin.com", res => {
//     console.log("Responce status code: ", res.statusCode);

//     res.on('data', chunk => {
//         console.log(chunk.toString());
//     });
// });

// Section 2.3
// import http from 'http';

// const server = http.createServer((req, res) => {
//     res.write('Hello HTTP\n');  
//     setTimeout(() =>{
//         res.write('I can stream!!\n');
//         res.end();
//     }, 3000);
// });

// server.listen(8080);

// emitted event
// server.on('request', (req, res) => {
//     res.write('Hello HTTP\n');  
//     setTimeout(() =>{
//         res.write('I can stream!!\n');
//         res.end();
//     }, 3000);
// });

// Section 2.4 Express
import express from 'express';
import config from './config';
import fs from 'fs';

const server = express();

// routing 
server.get('/', (req, res)=> {
    res.send("Hello Express!");
})

// 1st way
server.use(express.static('public'));
// 2nd way
// server.get('/about.html', (req, res) => {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     })
    
// });

server.listen(config.port, ()=> {
    console.info('Express is listening to the port ', config.port);
});











