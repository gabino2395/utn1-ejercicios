// 1)Imprime los números del 1 al 10

function imprime10() {
  let x = 1;
  while (x <= 10) {
    console.log(x);
    x = x + 1;
  }
}
// 2)Imprime los números pares del 2 al 20
function imprimePares() {
  let x = 2;
  while (x <= 20) {
    console.log(x);
    x = x + 2;
  }
}
// 3)Imprime los números impares del 1 al 19
function imprimeimpares() {
  let x = 1;
  while (x <= 20) {
    console.log(x);
    x = x + 2;
  }
}
// 4)Imprime los números del 10 al 1 en orden inverso
function imprime10a1() {
  let x = 10;
  while (x >= 1) {
    console.log(x);
    x = x - 1;
  }
}
// 5)Imprime los números del 1 al 10, pero se detiene al llegar al 5
function imprime_1_a_10_SeDetiene_en_5() {
  for (let i = 1; i <= 10; i++) {
    if (i === 6) {
      break;
    }
    console.log(i);
  }
}
// 6)Imprime los números del 1 al 10, pero salta el 5

function imprime_1_a_10_Salteando5() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}
// 7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
function decirNombre(nombre) {
  console.log(`hola ${nombre}`);
}
// 8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta

function saludar(nombre) {
  return `hola ${nombre}`;
}
// alert(saludar("Gabino"));

//  9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b

function sumar(a, b) {
  return a + b;
}
// console.log(sumar(2,2))
// 10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b

function restar(a, b) {
  return a - b;
}
// console.log(restar(4, 2));

// 11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null

function calcular(operacion, a, b) {
  if (operacion === "+") {
    return console.log(sumar(a, b));
  } else if (operacion === "-") {
    return console.log(restar(a, b));
  } else {
    return null;
  }
}

// 12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

function constarHasta(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}

// 13)Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.
function calculcadora_calcular() {
  let inicio = prompt("deseas usar la calculadora?");
  if (inicio === "si") {
    algoritmo();
  } else {
    console.log("El programa ha finalizado");
  }
  function algoritmo() {
    let numero1 = parseInt(prompt("ingrese primer numero"));
    let numero2 = parseInt(prompt("ingrese otro numero"));
    let operacion1 = prompt("ingrese tipo de operacion");
    calcular(operacion1, numero1, numero2);
    let probarDeNuevo = prompt("quieres usar la calculadora de nuevo?");
    if (probarDeNuevo === "si") {
      algoritmo();
    } else {
      console.log("El programa ha finalizado");
    }
  }
}

// 14)hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..no se ingresan valores por teclado.
function _25_terminos() {
  let x = 11;
  for (let i = 1; i <= 25; i++) {
    console.log(x * i);
  }
}

//15)hacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
function impares_y_pares() {
  let par = 0;
  let impar = 0;
  for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt("ingrese numero"));
    if (num % 2 === 0) {
      par++;
    } else {
      impar++;
    }
  }
  console.log(`los numeros pares son ${par} y los impares son ${impar}`);
}

// 16)hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.
function alturaPromedio() {
  let alturaTotal = 0;
  for (let i = 1; i <= 5; i++) {
    let altura = parseFloat(prompt("ingrese altura"));
    alturaTotal = alturaTotal + altura;
  }
  console.log(alturaTotal / 5);
}

// ejercicio 17, sacando el promedio del turno mañana
function sacandoPromedio() {
  let turnoMañana = 0;
  let turnoTrde = 0;
  let turnoNoche = 0;
  let promMañana;
  let promTarde;
  let promNoche;

  for (let i = 0; i <= 5; i++) {
    let edadTurnoMañana = parseInt(prompt("ingrese edad"));
    turnoMañana = edadTurnoMañana + turnoMañana;
  }
  // console.log(turnoMañana);
  promMañana = turnoMañana / 5;
  console.log(promMañana);
}

// 18)Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// a)	La cantidad de valores negativos ingresados.
// b)	La cantidad de valores positivos ingresados.
// c)	La cantidad de múltiplos de 15.
// d)	El valor acumulado de los números ingresados que son pares.

function _varios_datos_numericos() {
  let negativos = 0;
  let positivos = 0;
  let multiplos15 = 0;
  let totalPares = 0;

  for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("ingrese numero"));
    if (num >= 0) {
      positivos++;
    } else if (num < 0) {
      negativos++;
    } else if (num % 15 === 0) {
      multiplos15++;
    } else if (num % 2 === 0) {
      totalPares++;
    }
  }
  console.log(negativos);
  console.log(positivos);
  console.log(multiplos15);
  console.log(totalPares);
}

// 19)hacer un programa que lea los lados de 4 triángulos, e informar:
// a)	De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno
// b)	Cantidad de triángulos de cada tipo.
// c)	Tipo de triángulo del que hay menor cantidad.

function triangulos() {
  // acumuladores
  let equilatero = 0;
  let escaleno = 0;
  let isoceles = 0;

  // triangulo 1
  let lado1t1 = parseInt(prompt("ingrese lado1 del triangulo1"));
  let lado2t1 = parseInt(prompt("ingrese lado2 del triangulo1"));
  let lado3t1 = parseInt(prompt("ingrese lado3 del triangulo1"));
  if (lado1t1 === lado2t1 && lado1t1 === lado3t1) {
    equilatero++;
    console.log("El triangulo 1 es  equilatero");
  } else if (lado1t1 === lado2t1 || lado1t1 === lado3t1) {
    isoceles++;
    console.log("El triangulo 1 es isoceles");
  } else if (lado2t1 === lado3t1) {
    isoceles++;
    console.log("El triangulo 1 es  isoceles");
  } else if (lado1t1 !== lado2t1 && lado1t1 !== lado3t1) {
    escaleno++;
    console.log(" El triangulo 1 es escaleno");
  }

  // triangulo 2
  let lado1t2 = parseInt(prompt("ingrese lado1 del triangulo2"));
  let lado2t2 = parseInt(prompt("ingrese lado2 del triangulo2"));
  let lado3t2 = parseInt(prompt("ingrese lado3 del triangulo2"));
  if (lado1t2 === lado2t2 && lado1t2 === lado3t2) {
    equilatero++;
    console.log("El triangulo 2 es  equilatero");
  } else if (lado1t2 === lado2t2 || lado1t2 === lado3t2) {
    isoceles++;
    console.log("El triangulo 2 es isoceles");
  } else if (lado2t2 === lado3t2) {
    isoceles++;
    console.log("El triangulo 2 es  isoceles");
  } else if (lado1t2 !== lado2t2 && lado1t2 !== lado3t2) {
    escaleno++;
    console.log(" El triangulo 2 es escaleno");
  }
  // triangulo 3
  let lado1t3 = parseInt(prompt("ingrese lado1 del triangulo3"));
  let lado2t3 = parseInt(prompt("ingrese lado2 del triangulo3"));
  let lado3t3 = parseInt(prompt("ingrese lado3 del triangulo3"));
  if (lado1t3 === lado2t3 && lado1t3 === lado3t3) {
    equilatero++;
    console.log("El triangulo 3 es  equilatero");
  } else if (lado1t3 === lado2t3 || lado1t3 === lado3t3) {
    isoceles++;
    console.log("El triangulo  3 es isoceles");
  } else if (lado2t3 === lado3t3) {
    isoceles++;
    console.log("El triangulo es  isoceles");
  } else if (lado1t3 !== lado2t3 && lado1t3 !== lado3t3) {
    escaleno++;
    console.log(" El triangulo 3 es escaleno");
  }

  // triangulo 4
  let lado1t4 = parseInt(prompt("ingrese lado1 del triangulo4"));
  let lado2t4 = parseInt(prompt("ingrese lado2 del triangulo4"));
  let lado3t4 = parseInt(prompt("ingrese lado3 del triangulo4"));
  if (lado1t4 === lado2t4 && lado1t4 === lado3t4) {
    equilatero++;
    console.log("El triangulo 4 es  equilatero");
  } else if (lado1t4 === lado2t4 || lado1t4 === lado3t4) {
    isoceles++;
    console.log("El triangulo  4 es isoceles");
  } else if (lado2t4 === lado3t4) {
    isoceles++;
    console.log("El triangulo  4 es  isoceles");
  } else if (lado1t4 !== lado2t1 && lado1t4 !== lado3t4) {
    escaleno++;
    console.log("El triangulo 4 es escaleno");
  }
  console.log(`hay ${escaleno} de triangulos escaleno`);
  console.log(`hay ${isoceles} de triangulos isoceles`);
  console.log(`hay ${equilatero} de triangulos equilatero`);

  if (escaleno < isoceles && escaleno < equilatero) {
    console.log("El de menor cantidad es el triangulo escaleno");
  } else if (isoceles < escaleno && isoceles < equilatero) {
    console.log("El de menor cantidad es el triangulo isoceles");
  } else if (equilatero < escaleno && equilatero < isoceles) {
    console.log("El de menor cantidad es el triangulo equilatero");
  } else {
    console.log("no hay un unico triangulo de menor cantidad");
  }
}

// 20)hacer  una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
// Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
// 4 5 6 7 8 9 10

function _2Enteros() {
  let valorMenor = parseInt(prompt("Ingrese el numero menor"));
  let valorMayor = parseInt(prompt("Ingrese el numero mayor"));

  for (let i = valorMenor; i <= valorMayor; i++) {
    console.log(i);
  }
}

// 21)Hacer  una función que reciba tres enteros y retorne el promedio.

function promedio3Enteros() {
  let promedioTotal = 0;
  for (let i = 1; i <= 3; i++) {
    let numero = parseInt(prompt("ingrese numero"));
    promedioTotal = promedioTotal + numero;
  }
  console.log(promedioTotal / 3);
}

// 22)Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
function sumaDeValores() {
  let sumaTotal = 0;
  for (let i = 1; i <= 5; i++) {
    let valor = parseInt(prompt("ingrese valor"));
    sumaTotal = sumaTotal + valor;
  }
  console.log(sumaTotal);
}

// 23)hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final !¡

function palabraConExclamacion() {
  let palabra = prompt("ingrese palabra");
  console.log(`¡${palabra}!`);
}

// 24)Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

function obtenerNombreCompleto(nombre, apellido) {
  console.log(`${nombre} ${apellido}`);
}

// 25)Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

function convertirHorasEnSegundos(horas) {
  console.log(horas * 3600);
}

// 26)Definí una función generarEmail que reciba como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

function generarEmail(usuario, dominio) {
  console.log(`${usuario}@${dominio}.com`);
}

// 27)Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje:
// Ingresá una cantidad de grados Celsius
// Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado}

function deCelsius_a_Farenheit() {
  let gradosCelsius = prompt("ingresa una canitdad de grados Celsius");

  function toFarenheit(c) {
    return c * 1.8 + 32;
  }

  console.log(
    `La conversion de ${gradosCelsius} grados Celsius a Farenheit es: ${toFarenheit(
      gradosCelsius
    )}`
  );
}

// 28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
// Ingresá la distancia del recorrido
// Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
// Las velocidades de los medio de transporte son:
// a pie : 5 km/ hs
// bicicleta : 10 km/ hs
// auto : 50 km/hs

function calcularDistanciaRecorrido() {
  let distancia = parseInt(prompt("ingrese distancia del recorrido"));

  let caminoAPie = 12;
  let caminoABicicleta = 6;
  let caminoEnAuto = 1.2;

  let caminando = (distancia * caminoAPie) / 60;
  let enBici = (distancia * caminoABicicleta) / 60;
  let enAuto = (distancia * caminoEnAuto) / 60;

  console.log(
    `Para la distancia de ${distancia}km, en bicicleta el tiempo de viaje es ${enBici} hs, a pie ${caminando} hs y en auto ${enAuto} hs`
  );
}

// 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// datos con los cuales deben ser enviados a la función

// puedeVerPelicula(12, false)
// false
//  puedeVerPelicula(12, true)
// true
//  puedeVerPelicula(16, false)
// true
//  puedeVerPelicula(18, true)
// true

function puedeVerPelicula(edad, tieneAutorizacion) {
  if (edad >= 15 && tieneAutorizacion) {
    console.log("puede ver pelicula");
  } else {
    console.log("no puede ver pelicula");
  }
}

// 30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
// datos con los cuales deben ser enviados a la función:
// esVocal('a')
// true
//  esVocal('n')
// false
//  esVocal('e')
// true

function esVocal(letra) {
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    console.log("es vocal");
  } else {
    console.log("no es vocal");
  }
}
