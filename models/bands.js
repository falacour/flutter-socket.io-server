const Band = require("./band");

class Bands{
    constructor(){
        this.bands = [];
    }

    //agregar
    addBanda(band = new Band()){
        this.bands.push(band);
    }

    //traer bandas
    getBandas(){
        return this.bands;
    }

    //borrar banda
    deleteBanda(id = ''){
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    votarBanda(id = ''){
        this.bands = this.bands.map( band => {
            if (band.id === id){
                band.votos++;
                return band;
            }else{
                return band;
            }
        } );
    }


}

module.exports = Bands;