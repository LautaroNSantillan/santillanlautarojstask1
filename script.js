// Resumen
// Para crear un bucle tenemos varias opciones:
// a. WHILE
// b. DO WHILE
// c. FOR
// 1. Al utilizar la palabra recerbada “while” podemos crear un ciclo de repeticion el cual
// necesita una condicion para poder ejecutar repetidamente una serie de acciones.
// Luego de la palabra reservada se coloca parentesis (sentencia a evaluar), donde
// estara la expresion que sera evaluada y que estara encargada de permitir o no
// continuar ejecutando su bloque de codigo. Luego de los parentesis se abriran y
// cerraran las llaves {...bloque de codigo…} en donde estaran la o las acciones a ser
// ejecutadas en cada iteracion. Al ser un bucle condicional se necesitara tener dentro
// del bloque de codigo a iterar algo que altere en algun momento la el valor resultante
// de la condicion dentro de los parentesis del ciclo while para que en algun momento
// finalice, ya que de no hacerlo estaremos cayendo en un bucle infinito el cual podria
// colgar el navegador en donde se este ejecutando el codigo.
// 2. “do while” funciona de la misma manera que el while con la diferencia de que se
// comienza con la palabra reservada “do” seguido de las llaves {...bloque de codigo…}
// donde estaran la o las acciones a iterar, y luego de la llave de cierre colocar la
// palabra reservada “while” seguido de los parentesis con la expresion a evaluar
// (exprecion o condicion). Asi como el while debe haber algo que cambie el valor de
// verdad de la exprecion dentro de los parentesis para que en algun momento finalice.
// Y Como ultima diferencia respecto de su contra parte while, el bucle do while permite
// por lo menos ejecutar 1 vez el bloque de codigo.
// 3. Por ultimo tenemos la palabra reservada “for” con la cual podemos realizar un ciclo
// de repeticion una cantidad determinada de veces. La estructura comun es la
// siguiente: for(A;B;C){...bloque de codigo…}. A: Declaracion e inicializacion de la
// variable de control, por lo general “let i = 0”, esta sera la variable que se utilizara
// como indice de la iteracion. B: Condicion a ser evaluada para continuar iterando, por
// lo general se utiliza la variable de control, como por ejemplo “i menor a 10” en donde
// el bucle for seguira iterando mientras que esta condicion sea verdadera. C: En este
// apartado se coloca el paso, al realizar un incremento en la variable de control nos
// estamos asegurando que en cada iteracion su valor cambia, por lo cual la condicion
// en el apartado B en algun momento sera falsa y finalizara la iteracion.

// ejercicios
// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).

function ej01_generarTablaMultiplicar() {
    let num = parseInt(prompt("Ingrese un numero para mostrar su tabla de multiplicar"));
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}
// ej01_generarTablaMultiplicar();

// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

function ej02_agregarNums() {
    let num = 0;
    let numeros = [];
    num = parseInt(prompt("Ingrese un numero a acumular // Ingrese 0 para salir"))
    while (num !== 0) {
        numeros.push(num);
        num = parseInt(prompt("Ingrese un numero a acumular // Ingrese 0 para salir"))
    }
    console.log(numeros)
}
// ej02_agregarNums()


// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.

function mayorOMenor(numInc, numIng) {
    if (numInc > numIng) {
        alert(`El numero ingresado es menor, vuelve a intentarlo`);
    } else {
        alert(`El numero ingresado es mayor, vuelve a intentarlo`);
    }
}

function ej03_juegoAdivinanza() {
    let numeroIncognita = Math.floor(Math.random() * 100) + 1
    let numeroIngresado = 0;
    if (confirm('Intente adivinar el numero "Incognita". \nSe encuentra entre 1 y 100 inclusives. \nComenzamos?')) {
        numeroIngresado = prompt("Ingrese un numero")
        let intentos = 1;
        while (numeroIncognita != numeroIngresado) {
            mayorOMenor(numeroIncognita, numeroIngresado)
            numeroIngresado = prompt("Ingrese un numero")
            intentos++;
        }
        alert(`Ganaste, haz adivinado el numero. Tan solo te tomó ${intentos} intentos`);
    }
}

// ej03_juegoAdivinanza()

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

function ej04_esPrimo() {
    let num = parseInt(prompt("Ingrese un numero para saber si es primo o no"))
    if (num === 0 || num === 1 || num === 4) console.log(`${num} no es primo`)
    else {
        for (let i = 2; i < num / 2; i++) {
            if (num % i == 0) console.log(`${num} no es primo`);
        }
        // Si no se pudo dividir por ninguno de los de arriba, sí es primo
        console.log(`${num} es primo`);
    }
}
// ej04_esPrimo()

// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

function ej05_mostrarDivisores() {
    let num = parseInt(prompt("ingrese un numero para mostrar sus divisores"))
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            console.log(`${i}`);
        }
    }
    console.log(num)
}
// ej05_mostrarDivisores()

// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.

function ej06_imprimirArray(arr) {
    for (let i of arr) {
        console.log(i)
    }
}

// let arr=[8,2,3,4,5,6,7,8,9,10]
// imprimirArray(arr);

// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

function ej07_imprimirDobleArray(arr) {
    for (let i of arr) {
        console.log(i * 2)
    }
}

// let arr=[8,2,3,4,5,6,7,8,9,10]
// ej07_imprimirDobleArray(arr)

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

function ej08_presentacionPersona(familia) {
    for (let i of familia) {
        console.log(`Mi nombre es ${i.nombre}, tengo ${i.edad} años, color de ojos ${i.colorOjos} y mido ${i.altura}mts de altura`)
    }
}

let grupoFamiliar = [
    {
        nombre: "Fernando",
        edad: 32,
        colorOjos: "marron",
        altura: "1.80"
    },
    {
        nombre: "Noelia",
        edad: 30,
        colorOjos: "marron",
        altura: "1.81"
    },
    {
        nombre: "Luciano",
        edad: 28,
        colorOjos: "marron",
        altura: "1.85"
    },
    {
        nombre: "Daniela",
        edad: 26,
        colorOjos: "marron",
        altura: "1.75"
    },
    {
        nombre: "Carolina",
        edad: 10,
        colorOjos: "marron",
        altura: "1.55"
    },
]

// ej08_presentacionPersona(grupoFamiliar)

// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

function ej09_imprimirImpares(arr) {
    for (let i of arr) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// let arr=[8,2,3,4,5,6,7,8,9,10]
// ej09_imprimirImpares(arr)

// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.

function ej10_sumaImparesYPares() {
    let num = parseInt(prompt("ingrese un num"))
    let arrNums = []
    while (num !== 0) {
        arrNums.push(num);
        num = parseInt(prompt("ingrese un num"))
    }
    let sumaPar=0;
    let sumaImpar=0;
    for (let i of arrNums) {
        if (i % 2 === 0) {
            sumaPar+=i;
        }else{
            sumaImpar+=i;
        }
    }
    console.log(`Suma de numeros pares = ${sumaPar}`)
    console.log(`Suma de numeros impares = ${sumaImpar}`)
}

// ej10_sumaImparesYPares();

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.

function ej11_numeroMasGrande(arr){
    let masGrande=0;
    for(let i of arr){
        if(masGrande<i) masGrande=i;
    }
    console.log("El numero mas grande del arreglo es el "+masGrande)
}

// let arrNum=[1,4,5,7,36,4,65,12,4,4]
// ej11_numeroMasGrande(arrNum)

// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.

function ej12_numeroMasChico(arr){
    let masChico=999999999999;
    for(let i of arr){
        if(masChico>i) masChico=i;
    }
    console.log("El numero mas chico del arreglo es el "+masChico)
}

// let arrNum=[2,4,5,7,36,4,65,12,4,4]
// ej12_numeroMasChico(arrNum)

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

function hizoTrampa(j,finalizado){
    if(j.mano!=="PAPEL"&&j.mano!=="PIEDRA"&&j.mano!=="TIJERAS"){
        alert(`${j.nombre} hizo trampa!`)
        return true
    }else return false
}

function quienGana(j1,j2){
    switch (j1.mano){
        case "PAPEL":{
            if(j2.mano==="TIJERAS"){    
                alert(`${j2.nombre} le gana a ${j1.nombre}`)
                return true;
            }else if(j2.mano==="PIEDRA"){
                alert(`${j1.nombre} le gana a ${j2.nombre}`)
                return true;
            }else{
                alert(`${j1.nombre} y ${j2.nombre} empataron`)
            }
            break;
        }
        case "TIJERAS":{
            if(j2.mano==="PIEDRA"){
                alert(`${j2.nombre} le gana a ${j1.nombre}`)
                return true;
            }else if(j2.mano==="PAPEL"){
                alert(`${j1.nombre} le gana a ${j2.nombre}`)
                return true;
            }else{
                alert(`${j2.nombre} y ${j1.nombre} empataron`)
            }
            break;
        }
        case "PIEDRA":{
            if(j2.mano==="PAPEL"){
                alert(`${j2.nombre} le gana a ${j1.nombre}`)
                return true;
            }else if(j2.mano==="TIJERAS"){
                alert(`${j1.nombre} le gana a ${j2.nombre}`)
                return true;
            }else{
                alert(`${j2.nombre} y ${j1.nombre} empataron`)
            }
            break;
        }
    }
}

function ej13_piedraPapelTijeras(){
    let jugador1={nombre:"",mano:""}
    let jugador2={nombre:"",mano:""}
    jugador1.nombre=prompt("Ingrese el nombre del jugador 1")
    jugador2.nombre=prompt("Ingrese el nombre del jugador 2")
    let finalizado=false;
    while(!finalizado){
        alert("ingresen sus manos!")
        jugador1.mano=prompt(`${jugador1.nombre}, ingrese PIEDRA, PAPEL o TIJERAS`)
        if(!hizoTrampa(jugador1)){
            jugador2.mano=prompt(`${jugador2.nombre}, ingrese PIEDRA, PAPEL o TIJERAS`)
            if(!hizoTrampa(jugador2)){
                finalizado=quienGana(jugador1,jugador2)
            }
        }
    }
}
    
// ej13_piedraPapelTijeras();


// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.
function asteriscos(num){
    let asteriscos="";
    for(let i=1; i<=(num*2)+1;i++){
        asteriscos+="*";
    }
    return asteriscos;
}

function espacios(num){
    let espacios="";
    for(let i=5-num; i>1;i--){
        espacios+=" ";
    }
    return espacios;
}

function ej14_imprimirTriangulo(){
    for(let i=0; i<5; i++){
        console.log(espacios(i)+asteriscos(i))
    }
}

//    *    
//   ***
//  *****
// *******
//*********/

// ej14_imprimirTriangulo()

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.

function asteriscos(num){
    let asteriscos="";
    for(let i=(num*2)+1; i<=9;i++){
        asteriscos+="*";
    }
    return asteriscos;
}

function espacios(num){
    let espacios="";
    for(let i=0; i<num;i++){
        espacios+=" ";
    }
    return espacios;
}

function ej15_imprimirTrianguloInvertido(){
    for(let i=0; i<5; i++){
        console.log(espacios(i)+asteriscos(i))
    }
}

//*********
// ******* 
//  *****
//   ***
//    *

// ej15_imprimirTrianguloInvertido()

// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

function ej16_ordenarArray(arr){
    let aux
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length-j-1; i++) {
            if(arr[i] < arr[i+1]){
                aux = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = aux;
            }
        }
    }
    console.log(arr)
}
// let arrNum=[2,4,5,7,36,4,65,12,4,8]
// ej16_ordenarArray(arrNum)

