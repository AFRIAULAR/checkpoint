let autos = require ('./modules/modules')
const concesionaria = {
    autos: autos,
       buscarAuto: function(patente) {
      let autoFinded = autos.find(autos => autos.patente == patente);
           return autoFinded !== undefined ? autoFinded : null
   }   
}