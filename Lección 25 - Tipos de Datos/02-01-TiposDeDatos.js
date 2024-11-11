//Tipo de dato string

/*Ejemplos de tipos de datos 
de JavaScript */

var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre);

var numero = 1000;
console.log(numero);

var objeto = {
    nombre : "Juan",
    apellido: "Pérez",
    telefono : "2213454962"
}
console.log(objeto);

//El javascript las variales son variables dinámicas, en cualquier momento podemos asignarle otro valor a la variable. 

nombre = 10

console.log(typeof nombre);

//tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){};

console.log(miFuncion);
console.log(typeof miFuncion);


//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);


//Tipo undefined es cuando tienes cualquier tipo de variable
var x;
console.log(x);

//null = ausencia de valor

var y = null;
console.log(y);
console.log(typeof y);

//Arrays
var autos = ['BMW', 'AUDI', 'Volvo']
console.log(autos);
console.log(typeof autos)

//Cadena de datos vacío es un string
var z = '';
console.log(z)
console.log(typeof z)

