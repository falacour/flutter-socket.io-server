const {io} = require('../index'); //importacion de io desde index.js
const Band = require ('../models/Band');
const Bands = require('../models/Bands');


const bands = new Bands();

bands.addBanda(new Band('Metallica'));
bands.addBanda(new Band('Queen'));
bands.addBanda(new Band('Heroes del Silencio'));
bands.addBanda(new Band('Bon Jovi'));

console.log(bands);

//Mensajes de sockets
io.on('connection', client => { //cuando se conecta un client. computadora o dispositivo que se conecta a socketserver
   console.log('Cliente conectado');

   client.emit('bandas-activas', bands.getBandas());// unicamente al cliente que se esta conectando
   
    client.on('disconnect', () => { //va a disparar esto cuando el cliente se desconecte 
        console.log('Cliente desconectado');
     });

     client.on('mensaje', (payload) => {

        console.log('Mensaje', payload);

        io.emit('mensaje', {admin: 'Nuevo mensaje'}); //va a emitir un mensaje a todos los dispositivos conectados
      

     });
      
   //   client.on('emitir-mensaje', (payload) =>{
   //    console.log(payload);  
   //    //io.emit('nuevo-mensaje', payload);  //emite el mensaje a todos los dispositivos
   //    //enviar mensaje desde flutter a pagina web a travez del servidor
   //      client.broadcast.emit('nuevo-mensaje', payload);// emite el mensaje a todos los dispositivos menosa al que lo emitio
   //   })

   client.on('agregar-voto', (payload) =>{
      //console.log(payload);  
      bands.votarBanda(payload.id);
      io.emit('bandas-activas', bands.getBandas()); //io es el servidor, todos los clientes conectados estan ahi
   })

   client.on('agregar-banda', (payload) =>{
      const nuevaBand = new Band(payload.nombre);  
      bands.addBanda(nuevaBand);
      io.emit('bandas-activas', bands.getBandas()); //io es el servidor, todos los clientes conectados estan ahi
   })

   client.on('borrar-banda',(payload) => {
      console.log(payload);
      bands.deleteBanda(payload.id);
      io.emit('bandas-activas', bands.getBandas());

   })



});