function Auto (marca, modelo, color, anio, kms, precio, cuotas, patente, vendido){
    this.marca = marca; 
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.kms = kms;
    this.precio = precio;
    this.cuotas = cuotas;
    this.patente = patente;
    this.vendido = vendido;
}

let autos = []

let auto1 = new Auto ("Ford","Fiesta","Azul", 2019, 200, 150000, 12,"APL123",false);

let auto2 = new Auto ("Toyota", "Corolla", "Blanco", 2019, 0, 100000, 14, "JJK116", false); 
autos.push(auto1, auto2);

console.log(autos);
module.exports=autos;