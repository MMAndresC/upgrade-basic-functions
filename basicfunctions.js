//Iteracion #1
//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
    (numberOne > numberTwo) ? console.log(numberOne) : console.log(numberTwo);
}

sum(10,9);


  //Iteracion #2
  //Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let longestArray ='';
    for(const element of param){
        if (element.length > longestArray.length){
            longestArray = element;
        }
    }    
    return longestArray;
}

console.log(findLongestWord (avengers));


//Iteracion #3
//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let total=0;
    param.forEach((element) => {
        total += element;
    })
    return(total);
}

console.log(sumAll(numbers));


//Iteracion #4
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    let total=0;
    param.forEach((element) => (total += element));
    return (total/param.length);
}

console.log('Promedio sin limitar decimales:', average(numbers2));
console.log('Promedio con los decimales limitados a 2:', (average(numbers2)).toFixed(2)); //fixed convierte en cadena y asi se puede redondear los decimales 


//Iteracion #5
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let total=0;
    for (let element of param){
        typeof element === 'number' ? total += element : total += element.length;
    }
    return total;
}
console.log('La suma de la cadena mixta es;', averageWord(mixedElements));


//Iteracion #6
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los 
//elimina para retornar un array sin los elementos duplicados.
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
function removeDuplicates(param) {
    const noDuplicates=[];
    param.forEach((element, position) =>{
        if (param.lastIndexOf(element) === position){
            noDuplicates.push(element);
        }
    })   
    return noDuplicates;
}
console.log(removeDuplicates(duplicates));


//Iteracion #7
//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array 
//- comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  let position;
  function finderName(param,elementSearched) {
    if(param.includes(elementSearched)){
        position = param.indexOf(elementSearched);
        return (true);
    }
    return(false);
  }
  finderName(nameFinder,'Xabier') ? console.log('Si que esta, en la posicion:', position) : console.log('No esta');  
  finderName(nameFinder,'Remy') ? console.log('Si que esta, en la posicion:', position) : console.log('No esta');


    //Iteracion #8
  //Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
function repeatCounter(param) {
    let total;
    param.forEach((element) => {
        total=0;
        param.forEach((item) =>{
            if(element === item){
                total +=1;
            }
        })
        console.log('La palabra', element, 'esta repetida', total,'veces');
    })
}
repeatCounter(counterWords);