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
