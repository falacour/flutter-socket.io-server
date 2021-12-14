const {v4: uuidV4} = require('uuid');

class Band{
    constructor(nombre = 'no-name'){
        this.id = uuidV4(); //se crea nuevo id unico
        this.nombre = nombre;
        this.votos = 0;
    }
}

module.exports = Band; //exportacion de la clase Band