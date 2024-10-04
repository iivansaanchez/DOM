//Boletín Evaluable 1 DOM

// Posicionarnos en el elemento #contenedorCartas y mostrarme por consola los siguientes elementos:

// Primero extraemos el elemento
const contenedorCartas = document.querySelector("#contenedorCartas");

// 1) Su primer hijo
//Para acceder a su primer hijo usamos children y el numero al que queramos acceder,
//teniendo en cuenta que empezamos en 0
console.log(contenedorCartas.children[0]);

// 2) Su tercer hijo
console.log(contenedorCartas.children[2]);

// 3) El siguiente hermano del tercer hijo
//Para acceder al siguiente hermano usamos nextElementSibling
console.log(contenedorCartas.children[2].nextElementSibling);

// 4) Su último hijo

console.log(contenedorCartas.lastElementChild);

// 5) Su padre
console.log(contenedorCartas.parentNode);

// 6) El padre del padre
console.log(contenedorCartas.parentNode.parentNode);

// 7) Su hermano anterior (del contenedorCartas, no del padre del padre)
console.log(contenedorCartas.previousElementSibling);

// 8) Las clases del último hijo (usamos classList para un mejor manejo de clases)
console.log(contenedorCartas.lastElementChild.classList);
