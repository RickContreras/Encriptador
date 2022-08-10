"use strict";

const encriptador={'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober','u': 'ufat'};

function validarCadena(){
    const mayuscula=/[A-Z]/;
    const especiales=/[À-Ýà-ÿ]/
    let texto=document.getElementsByClassName('areaDeTexto');
    let cadena=texto[0].value;
  
    if(!(mayuscula.test(cadena))&&!(especiales.test(cadena))){
        return true;
    }else{
        alert("Introduzca solo cadenas en minusculas y sin acentos");
        return false;
    }
}

function desencriptar(palabra){
    /** utilizamos una variable para almacenar la cadena despues de quitar una encriptación */
    let cadenaDesencriptada;
  
    if(validarCadena()){
        /** aqui nos moveremos por las llaves de nuestro diccionario */
        for(let elemento in encriptador){
  
            /** Como es el proceso inverso utilizamos el valor para luego sustituirlo por la llave */
            let cadARemplazar=encriptador[elemento];
  
            /** Creamos una expresión regular que analizara nuestra palabra encriptada globalmente
            * Esta, basicamente, la utilizaremos para indetificar si existe este patron de "encriptación"
            * en la cadena o palabra
            */
            let exprR= new RegExp(cadARemplazar, 'g');
  
  
        /** Verificamos si el patron existe */
            if (exprR.test(palabra)){
  
                /** Cambiamos todas las partes, con este patron, por la llave correspondiente */
                cadenaDesencriptada=palabra.replace(exprR, elemento);
  
                /** Definimos palabra como la palabra con el patron ya remplazado
                * 
                * Esto con el fin de que de que se pueda quitar todos los patrones de encriptación
                * de la palabra ingresada
                */
                palabra=cadenaDesencriptada;
            }
        }
    }
    return palabra;
}

function encriptar(palabra){
    /**
     *Creamos una cadena donde iremos colocando la cadena encriptada*/
    let cadenaEncriptada='';
  
    if(validarCadena()){
        /* Recorremos cada letra de la palabra */
        for (let i=0, lonp=palabra.length;i<lonp;i++){
  
            /* Si la letra no se encuentra en el siguiente ciclo se agregara
            a la cadena */
            let introducir=true;
  
            /* El siguiente for recorre las llaves del diccionario */
            for (let elemento in encriptador){
              
                /* Aqui se compara cada letra con cada llave */
                if (palabra[i]===elemento){
                    /**
                    * Si coincide, 
                    * entonces agregaremos el valor almacenado por la llave a la cadena */
                    cadenaEncriptada+=encriptador[elemento];
  
                    /**
                    * Para evitar que luego de esto se vuelva añadir la letra analizada ponemos false
                    */
                    introducir=false;
                }
            }
         
            /**
            * Aqui se introduccen todas las letras que no se encuentran en nuestro diccionario.
            */
            if(introducir){
                cadenaEncriptada+=palabra[i];
            }
        }
    }
    return cadenaEncriptada;
}

function desoscultaryocultar(){
    let invisibles=document.getElementsByClassName("invisible");
        
    for (let i=0, j=invisibles.length;i<j;i++){
        invisibles[i].style.display="block";
    }
}


/**-------------------------------------------------------------------------------------- */
function encriptarMensaje(){
    let texto=document.getElementsByClassName('areaDeTexto');
    let textoAlterado=document.getElementById('areaDeTextoAlterado');
    
    let textoAEncriptar=texto[0].value;
    textoAlterado.value=encriptar(textoAEncriptar);
    
    desoscultaryocultar();
}


function desencriptarMensaje(){
    let texto=document.getElementsByClassName('areaDeTexto');
    let textoAlterado=document.getElementById('areaDeTextoAlterado');
    
    let textoADesencriptar=texto[0].value;
    textoAlterado.value=desencriptar(textoADesencriptar);
    
    desoscultaryocultar();
}

function copiar(){
    let textoACopiar=document.getElementById('areaDeTextoAlterado');
    textoACopiar.select();
    navigator.clipboard.writeText(textoACopiar.value);
}


let botonEncriptar=document.getElementsByClassName("Encriptador")
let botonDesencriptar=document.getElementsByClassName("Desencriptador")
let botonCopiar=document.getElementById("copiar")

botonEncriptar[0].onclick=encriptarMensaje;
botonDesencriptar[0].onclick=desencriptarMensaje;
botonCopiar.onclick=copiar;