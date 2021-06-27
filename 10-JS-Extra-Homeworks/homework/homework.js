// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = new Array();
  for (clave in objeto){
    matriz.push([clave, objeto[clave]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var array = new Array();
  var object = {};
  array = string.split("");
  array.forEach(element =>{
    if (!object[element]){
      object[element]=0;
    }
    object[element] ++;
  });
  return object
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var array = new Array();
  var may = new Array();
  var min = new Array();
  array = s.split("");
  array.forEach(element =>{
    if (element.toUpperCase() === element){
      may.push(element);
    }else{
      min.push(element);
    }
  });
  s = may.join("") + min.join("");
  return s;
 }


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var alt = new Array();
  var array = new Array();
  array = str.split(" ");
  console.log(array)
  str = "";
  array.forEach(element=>{
      var strunido = element.split("").reverse().join("");
      if (array[0] === element){
        str += strunido;
      }else{
        str += " " + strunido;
      }
      
      console.log(str);
  });

 // console.log(str);
  return str;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str = numero.toString(10);
  var contador = 0;
  //do{
   // console.log(str.charAt(contador));
   // console.log(str.charAt(str.length - 1 - contador));
    if (str !== asAmirror(str)){
      return "No es capicua";
    }
 // }while (contador <= (str.length / 2));
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var modificada = "";
  var contador = 0;
  do{
    if ((cadena.charAt(contador)!== "a") && (cadena.charAt(contador)!== "b") && (cadena.charAt(contador)!== "c")){
      modificada += cadena.charAt(contador);
    }
    contador ++;
  }while (contador <= cadena.length - 1);
  return modificada;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var str = "";
  for (i = 0; i <= arr.length - 1; i++){
    for (x = i + 1; x <= arr.length - 1; x++){
      if (arr[x].length < arr[i].length){
        str = arr[i];
        arr[i] = arr[x];
        arr[x] = str; 
      }
    }
  }
  
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var nuevoarray = new Array();
  nuevoarray = arreglo1.filter(element => (arreglo2.find(el => el === element)));
  console.log(nuevoarray);
  return nuevoarray; 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

