let series = ["friends", "breaking bad", "game of thrones", "dexter", "rick and morty", "flash", "suits", "los simuladores", "cobra kai"];

// MAP
let seriesEnMayuscula = series.map(function(serie) {
    return serie.toUpperCase();
});

let seriesEnMayusculaArrow = series.map(serie => {
    return serie.toUpperCase();
});

let seriesEnMayusculaArrowUnaLinea = series.map(serie => serie.toUpperCase());

// console.log(seriesEnMayuscula);
// console.log(series);

// FILTER 
// Vamos a querer filtrar el array de series por la longitud de cada string. Solo vamos a dejar pasar a los que tengan longitud mayor a 10
let nombresCortos = series.filter(function(serie) {
    return serie.length > 10;
});

let nombresCortosArrow = series.filter(serie => {
    // Podemos hacer algo antes de retornar, como imprimir por consola el parametro del callback y ver que representa al mismo en cada iteración
    // console.log(serie);
    return serie.length > 10;
});

let nombresCortosArrowUnaSolaLinea = series.filter(serie => serie.length > 10);

// console.log(nombresCortos);

// DESTRUCTURING
let joey = {
    nombre: "Joey",
    apellido: "Tribbiani",
    edad: 30
};

// sin destructuring
let nombre = joey.nombre;
let apellido = joey.apellido;
let edad = joey.edad;

console.log(nombre);
console.log(apellido);
console.log(edad);

// con destructuring
let {nombre: name, apellido: lastName, edad: age} = joey;

console.log(name);
console.log(lastName);
console.log(age);