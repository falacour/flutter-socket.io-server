const express = require('express'); //importacion de paquetes   
const path = require('path');
require('dotenv').config(); //va a leer .env y establecer las variables de entorno
const app = express(); //aplicacion de express

//Node Server
const server = require('http').createServer(app); //creacion del servidor con las caracteristicas de la aplicacion de expres
module.exports.io = require('socket.io')(server); //exportacion del io 
require('./sockets/socket');



//path publico (carpeta publica)
const publicPath = path.resolve( __dirname, 'public'); //__dirname va a apuntar a donde se encuentre el servidor

app.use(express.static ( publicPath ));




server.listen(process.env.PORT, (err) =>{ // escuchando en el puerto 3000, y retorna un error si es que este sucede

    if(err) throw new Error(err); //devielve el error en consola

    console.log('Servidor corriendo en el puerto',process.env.PORT ); //si no sucede un error se imprime

});

