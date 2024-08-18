
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;//contador
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
//creacion de una funcion
//recibe parametros para que sea generica reutilizable.
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    // encapsulamiento de una accion
    // validar el intento de un usuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //reutilizar las fucntions volverlas a llamar 
    // console.log(intentos)
    //El ususario no acerto
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
   
   
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);
    
}
function limpiarCaja() {
    document.querySelector(`#valorUsuario`).value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //Si ya sorteamos todos los numeros.
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{//if anidado
        //si el nunmero generado esta incluido en al lista hcamos una operacion si no otra.
        //metdodo include
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al 10 ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales()
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales()

