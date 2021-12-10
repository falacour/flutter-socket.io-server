const {io} = require('../index'); //importacion de io desde index.js

//Mensajes de sockets
io.on('connection', client => { //cuando se conecta un client. computadora o dispositivo que se conecta a socketserver
    
    console.log('Cliente conectado');

    client.on('disconnect', () => { //va a disparar esto cuando el cliente se desconecte 
        console.log('Cliente desconectado');
     });

     client.on('mensaje', (payload) => {

        console.log('Mensaje', payload);

        io.emit('mensaje', {admin: 'Nuevo mensaje'}); //va a emitir un mensaje a todos los dispositivos conectados
        

     });



});