// VARIABLES

// Declaración

var saludo;
let nombre;
const correo = 'srellihan@digitalhouse.com'; //Una constante no puede ser declarada sin asignarle un valor, sino da error
console.log(saludo);
console.log(nombre);
console.log(correo);
/*
correo = 'agonzalez@digitalhouse.com'; // no podemos reasignarle un valor a una constante 
console.log(correo); // Imprime un error porque no podemos reasignarle un valor a una constante 
*/

// Scope de las variables

/* if(true) {
    // console.log(nombre);
    // console.log(correo);
    let apellido = 'Rellihan';
}
console.log(apellido); // apellido no está definido porque solo existe en el bloque de código que está entre las líneas 17 y 21 */


// TIPOS DE DATOS

// Booleano:
console.log(true);
console.log(false);
// Numéricos: 
console.log(10);
// Strings o cadena de caracteres: 
console.log('Hola soy un string');
// Array: 
console.log( [1,2,3] )
// Objetos literales: 
// {propiedad: valor, propiedad: valor}
console.log(
    {
        nombre: 'Matías',
        edad: 21,
        saludo: function() {
            return 'Hola'
        }
    }
);

// Tipos de datos especiales
/* null 
undefined
NaN */


// FUNCIONES

// Función tradicional
function saludar(nombre) {
    return 'hola ' + nombre;
}

// Función expresada
let saludo = function() {
    return 'hola ' + nombre;
}

// Funciones flecha
let conUnSoloParametro = nombre => 'hola '+ nombre; // Podemos evitar los paréntesis porque tiene un solo parametro
let conUnSoloParametro2 = (nombre) => 'hola '+ nombre; // Podemos usar los paréntesis también
let sinParametro = () => 'hola'; // Tenemos que usar los paréntesis para indicar que es una función sin parametro
let sinParametro2 = _ => 'hola '; // También podemos usar un guión bajo para indicar que es una función sin parametro
let conDosParametros = (nombre, apellido) => 'hola '+ nombre + apellido; // Tenemos que usar paréntesis en caso de que la función reciba más de un parámetro
let conVariasLineasDeCodigo = (nombre, apellido) => {
    // Lo que quiero aca 
    // Lo que quiero aca 
    // Lo que quiero aca 
    // Lo que quiero aca 
    return 'hola '+ nombre + apellido;
};

// CONDICIONALES

// if 
if (condicion) {
    // Lo que quieran que suceda si la condición es true
}

// if y else 
if (condicion) {
    // Lo que quieran que suceda si la condición es true
} else {
    // Lo que quiero que suceda si la condición es false
}

// if, else if y else
if (condition) {
    // Lo que quieran que suceda si la condición es true
} else if (nuevaCondicion) {
    // Lo que quieran que suceda si la nueva condición es true
} else {
    // Lo que quiero que suceda si la condición es false
}

// if ternario
if (1 == '1') {
    'El uno es igual al uno'
} else {
    'El uno no es igual al uno'
}

let resultado = 1 == '1' ? 'El uno es igual al uno' : 'El uno no es igual al uno'; // 'El uno es igual al uno' porque 1=='1' es true

let resultado = 1 === '1' ? 'El uno es igual al uno' : 'El uno no es igual al uno'; // 'El uno no es igual al uno' porque 1==='1' es false

// console.log(resultado);

// CALLBACKS
// Son funciones que se pasan como parametro de otra 


/* En programación II usaban el concepto de callback en las rutas de sus proyectos, en el ruteador por ejemplo. 
El método get es el responsable de decidir cuando se ejecutará la función funcionExpresada */
let funcionExpresada = () => console.log('Hola')
router.get('/', funcionExpresada);

/* En programación I usaban el concepto de callback con el método elementoSeleccionado.addEventListener('nombreEvento', callback)
El método addEventListener es el repsosnable de decidir cuando se ejecuta el callback */