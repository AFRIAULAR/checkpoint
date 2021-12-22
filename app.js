let autos = require ('./modules/modules');

const concesionaria = {
    autos: autos,
       buscarAuto: function(patente) {
      let autoFinded = autos.find(autos => autos.patente == patente);
           return autoFinded !== undefined ? autoFinded : null
   } ,
    venderAuto: function (patente) {
        const autos = this.buscarAuto(patente);
            if (autos) {
            autos.vendido = true;
    } },
    autosParaLaVenta: function (patente){
        return autos = this.autos.filter(function (auto){
           return !auto.vendido
        }) 
 }  }