//importing libraries
const express = require('express');
const server = express();
const io = require('socket.io')();
// const http = require('http');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
// const allowedOrigins = 'http://localhost:* http://127.0.0.1:*';


//importing routes
const index = require('./routes/index');

//using middlewares
server.use(bodyParser.json());
server.use(cors());

//defining port
const PORT = process.env.PORT || 4000;

//using middleware
// server.use((req,res, next)=>{
//     res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     next();
// })
//using routes
server.use('/', index);

//using socket
let interval;
io.on('connection', (client) => {
    console.log('new client connected');
    if(interval){
        clearInterval(interval);
    }
    interval = setInterval(() => getAPIAndEmit(client), 10000);
    client.on('dissconnect', () => console.log('client dissconnected'));
})

io.listen(PORT)
console.log(`port started at ${PORT}`);

//event handler
const getAPIAndEmit = async (socket) => {
    const res = axios.get('http://api.openweathermap.org/data/2.5/weather?q=patna&lang=en&units=metric&APPID=cce54bd2f32dfbea3a608858a2cd7995')
                    .then(response => {
                    socket.emit('FromAPI', response.data);  
                    }).catch(err => console.log(err))
};