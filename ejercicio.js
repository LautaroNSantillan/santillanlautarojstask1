
/* EJERCICIO 1 */
function multiplyingTable() {
    let num = Number(prompt("Ingrese número"))
    let mTable = []
    for (i = 1; i <= 10; i++) {
        mTable.push(num * i)
    } console.log(mTable)
}

let btn1 = document.getElementById("e1")
btn1.addEventListener('click', event => multiplyingTable())


/* EJERCICIO 2 */
function numLi() {
    let list = [];
    let num;
    while (num != 0) {
        num = prompt("ingresar:");
        if (num != 0)
            list.push(num);
    }
    console.log(list);
}

let btn2 = document.getElementById("e2")
btn2.addEventListener('click', event => numLi())


/* EJERCICIO 3 */
const guess = () => {
    let numeroAdivinar = Math.floor(Math.random() * 100);
    let intento = 0;
    let numIngresado;
    while (numeroAdivinar != numIngresado) {
        if (intento === 0) {
            numIngresado = prompt("ingresar numero:" + numeroAdivinar);
        }
        else if (numIngresado > numeroAdivinar) {
            numIngresado = prompt("el numero ingresado es mayor, ingresar otro numero:");
        }
        else if (numIngresado < numeroAdivinar) {
            numIngresado = prompt("el numero ingresado es menor, ingresar otro numero:");
        }
        intento++;
    }
    alert("felicitaciones acertaste con " + intento + " intentos");
}

let btn3 = document.getElementById("e3")
btn3.addEventListener('click', event => guess())


/* EJERCICIO 4 */
const isPrime = () => {
    let numero1 = prompt("ingresa un numero entero: ")
    let cont = 0;
    for (i = 1; i < numero1; i++) {
        if ((numero1 % i) === 0) {
            cont++;
        }
        else if (cont > 1) {
            alert("no es primo")
            break;
        }
        else {
            alert("son numeros primos")
            break;
        }
    }
}

let btn4 = document.getElementById("e4")
btn4.addEventListener('click', event => isPrime())


/*  EJERCICIO 5 */
const dividers = () => {
    let numero2 = parseInt(prompt("ingresa un numero entero: "))
    let list = [];
    for (i = 1; i <= numero2; i++) {
        if ((numero2 % i) === 0) {
            list.push(i)
        }
    }
    console.log(list)
}

let btn5 = document.getElementById("e5")
btn5.addEventListener('click', event => dividers())


/* EJERCICIO 6 */
const tenNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const tenElementslog = (arr) => {
    for (let item of arr) {
        console.log(item)
    }
}
let btn6 = document.getElementById("e6")
btn6.addEventListener('click', event => tenElementslog(tenNum))

/* EJERCICIO 7 */
const tenElementsDouble = (arr) => {
    for (let item of arr) {
        console.log(item * 2)
    }
}
let btn7 = document.getElementById("e7")
btn7.addEventListener('click', event => tenElementsDouble(tenNum))

/* EJERCICIO 8 */
let family = [
    {
        nombre: "Juan",
        edad: 56,
        signo: "cancer",
        altura: 1.84,
    },
    {
        nombre: "Maria",
        edad: 50,
        signo: "leo",
        altura: 1.60,
    },
    {
        nombre: "Pablo",
        edad: 25,
        signo: "acuario",
        altura: 1.80,
    },
    {
        nombre: "Marta",
        edad: 30,
        signo: "capricornio",
        altura: 1.70,
    },
    {
        nombre: "Pedro",
        edad: 32,
        signo: "Virgo",
        altura: 1.74,
    }
]
const familyGroup = (arr) => {

    for (let data of arr) {
        alert('mi nombre es ' + data.nombre + ' tengo ' + data.edad + ' años y mi signo es ' + data.signo + ' y tengo una altura de ' + data.altura + 'cm.');
    }
}
let btn8 = document.getElementById("e8")
btn8.addEventListener('click', event => familyGroup(family))

/* EJERCICIO 9 */
const oddNum = (arr) => {
    for (let item of arr) {
        if (item % 2 !== 0) {
            console.log(item)
        }
    }
}
let btn9 = document.getElementById("e9")
btn9.addEventListener('click', event => oddNum(tenNum))

/* EJERCICIO 10 */

const evenOddAdd = () => {
    let evenAdd = 0;
    let oddAdd = 0;
    let numArr = [];
    let uInput = parseInt(prompt("ingrese un num"))
    while (uInput !== 0) {
        numArr.push(uInput)
        uInput = parseInt(prompt("ingrese un num"))
    }
    for (let n of numArr) {
        if (n % 2 === 0) {
            evenAdd += n;
        } else {
            oddAdd += n;
        }
    }
    console.log(`Suma de numeros pares = ${evenAdd}`)
    console.log(`Suma de numeros impares = ${oddAdd}`)
}

let btn10 = document.getElementById("e10")
btn10.addEventListener('click', event => evenOddAdd())

/* EJERCICIO 11 */
function greatest(arr) {
    let aux = 0;
    for (let n of arr) {
        if (n > aux) {
            aux = parseInt(n);

        } console.log(aux)
    }
    console.log("Más grande: " + aux)

}

let btn11 = document.getElementById("e11")
btn11.addEventListener('click', event => greatest(tenNum))

/* EJERCICIO 12 */
const smallest = (arr) => {
    let aux = 999999999999999;
    for (let n of arr) {
        if (n < aux) {
            aux = parseInt(n);

        } console.log(aux)
    }
    console.log("Más pequeño: " + aux)

}
let btn12 = document.getElementById("e12")
btn12.addEventListener('click', event => smallest(tenNum))

/* EJERCICIO 13 */

function cheat(j, finalizado) {
    if (j.mano !== "PAPEL" && j.mano !== "PIEDRA" && j.mano !== "TIJERAS") {
        alert(`${j.nombre} hizo trampa!`)
        return true
    } else return false
}

function winner(j1, j2) {
    switch (j1.mano) {
        case "PAPEL": {
            if (j2.mano === "TIJERAS") {
                alert(`${j2.nombre} le gana a ${j1.nombre}`)
                return true;
            } else if (j2.mano === "PIEDRA") {
                alert(`${j1.nombre} le gana a ${j2.nombre}`)
                return true;
            } else {
                alert(`${j1.nombre} y ${j2.nombre} empataron`)
            }
            break;
        }
        case "TIJERAS": {
            if (j2.mano === "PIEDRA") {
                alert(`${j2.nombre} le gana a ${j1.nombre}`)
                return true;
            } else if (j2.mano === "PAPEL") {
                alert(`${j1.nombre} le gana a ${j2.nombre}`)
                return true;
            } else {
                alert(`${j2.nombre} y ${j1.nombre} empataron`)
            }
            break;
        }
        case "PIEDRA": {
            if (j2.mano === "PAPEL") {
                alert(`${j2.nombre} le gana a ${j1.nombre}`)
                return true;
            } else if (j2.mano === "TIJERAS") {
                alert(`${j1.nombre} le gana a ${j2.nombre}`)
                return true;
            } else {
                alert(`${j2.nombre} y ${j1.nombre} empataron`)
            }
            break;
        }
    }
}

function rockPaperScissors() {
    let jugador1 = { nombre: "", mano: "" }
    let jugador2 = { nombre: "", mano: "" }
    jugador1.nombre = prompt("Ingrese el nombre del jugador 1")
    jugador2.nombre = prompt("Ingrese el nombre del jugador 2")
    let finalizado = false;
    while (!finalizado) {
        alert("ingresen sus manos!")
        jugador1.mano = prompt(`${jugador1.nombre}, ingrese PIEDRA, PAPEL o TIJERAS`)
        if (!cheat(jugador1)) {
            jugador2.mano = prompt(`${jugador2.nombre}, ingrese PIEDRA, PAPEL o TIJERAS`)
            if (!cheat(jugador2)) {
                finalizado = winner(jugador1, jugador2)
            }
        }
    }
}

let btn13 = document.getElementById("e13")
btn13.addEventListener('click', event => rockPaperScissors())


/* EJERCICIO 14 */
function asteriscos(num) {
    let asteriscos = "";
    for (let i = 1; i <= (num * 2) + 1; i++) {
        asteriscos += "*";
    }
    return asteriscos;
}

function espacios(num) {
    let espacios = "";
    for (let i = 5 - num; i > 1; i--) {
        espacios += " ";
    }
    return espacios;
}

function triangle() {
    for (let i = 0; i < 5; i++) {
        console.log(espacios(i) + asteriscos(i))
    }
}

let btn14 = document.getElementById("e14")
btn14.addEventListener('click', event => triangle())

/* EJERCICIO 15 */
function asteriscosI(num) {
    let asteriscosI = "";
    for (let i = (num * 2) + 1; i <= 9; i++) {
        asteriscosI += "*";
    }
    return asteriscosI;
}

function espaciosI(num) {
    let espaciosI = "";
    for (let i = 0; i < num; i++) {
        espaciosI += " ";
    }
    return espaciosI;
}

function triangleI() {
    for (let i = 0; i < 5; i++) {
        console.log(espaciosI(i) + asteriscosI(i))
    }
}
let btn15 = document.getElementById("e15")
btn15.addEventListener('click', event => triangleI())

/* EJERCICIO 16 */
function sortArr(arr) {
    let aux
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                aux = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = aux;
            }
        }
    }
    console.log(arr)
}
let arrNum = [2, 4, 5, 7, 36, 4, 65, 12, 4, 8]
let btn16 = document.getElementById("e16")
btn16.addEventListener('click', event => sortArr(arrNum))


/* NO ME SALIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO*/
function sortBeer(arr, abvi) {
    let beerList = [];
    for (let b of arr) {
        console.log(b.abv)
        if (b.abv <= abvi) {
            beerList.push()
        }
    } return beerList
}

let btne1 = document.getElementById("b1")
btne1.addEventListener('click', event => sortBeer(beers, 9))



/* BEERJERCICIO 2 */

const mostAbv = arr => {
    let abvBeer = [];
    console.log(arr.length)
    for (i = 1; i <= arr.length - 1; i++) {
        if (abvBeer.length<10 && arr[i].abv > arr[i - 1].abv ) {
            abvBeer.push(arr[i])
        }
        /*   else if (abvBeer.length>10) {
            abvBeer.shift()
            if (arr[i].abv > arr[i - 1].abv) {
                abvBeer.push(arr[i])
            }
        }*/
    } console.log(abvBeer)
    for (let beer of abvBeer) {
        console.log(beer.abv)
    }
}

mostAbv(beers)

/* BEERJERCICIO 3 */


/* ---------------------------------------------------------------------------- */ 




/*        GRACIAS    FERNANDO MARZIELTI            */ 


// 1-  Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)

function ej1_noExcedenNivelEtilico(cervezas, nivelEtilico){
    return cervezas.filter(cerve => cerve.abv<=nivelEtilico)
    .map(cerve => ({nombre:cerve.name, abv:cerve.abv, ibu:cerve.ibu}))
}

console.log("No exceden el nivel etilico: ")
console.log(ej1_noExcedenNivelEtilico(beers,5));

// 2-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas más alcohólicas

function ej2_top10Alcoholicas(cervezas){
    return cervezas.sort((cerve1,cerve2)=>cerve2.abv-cerve1.abv).slice(0,10)
}

console.log("Top 10 cervezas mas alcoholicas: ")
console.log(ej2_top10Alcoholicas(beers))

// 3-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas

function ej3_top10MenosAmargas(cervezas){
    return cervezas.sort((cerve1,cerve2)=>cerve1.ibu-cerve2.ibu).slice(0,10)
}

console.log("Top 10 cervezas menos amargas: ")
console.log(ej3_top10MenosAmargas(beers))

// 4-  Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false

function ej4_cervezasOrdenadas(cervezas,propiedad,ascendente){
    if(ascendente){
        return cervezas.sort((cerve1,cerve2)=>cerve1[propiedad]-cerve2[propiedad])
        .slice(0,10)
    }else{
        return cervezas.sort((cerve1,cerve2)=>cerve2[propiedad]-cerve1[propiedad])
        .slice(0,10)
    }
}

console.log("Top 10 cervezas ordenadas por propiedad: 'ph ascendente' ")
console.log(ej4_cervezasOrdenadas(beers,"ph",true))

console.log("Top 10 cervezas ordenadas por propiedad: 'attenuation_level descendente' ")
console.log(ej4_cervezasOrdenadas(beers,"attenuation_level",false))

// 5-  Generar una función que reciba como parámetro un array de cervezas y un id. La función debe renderizar (renderear, dibujar, pintar, llenar, etc) en un  archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden  de cada una de las cervezas.

function ej5_renderizarTabla(cervezas, id){
    let tabla=`<div id="${id}" class="table-responsive w-50 m-5">
                <table class="table table-primary">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ABV</th>
                            <th>IBU</th>
                        </tr>
                    </thead>
                <tbody>`
    for(cerve of cervezas){
        tabla+=`<tr>
                    <td>${cerve.name}</td>
                    <td>${cerve.abv}</td>
                    <td>${cerve.ibu}</td>
                </tr>`
    }  
    tabla+= `   </tbody>
            </table>
        </div>`
    document.getElementsByTagName("body")[0].innerHTML+=tabla;
}

console.log('Tabla generada con id "nuevaTabla"')
ej5_renderizarTabla(beers,"nuevaTabla")

