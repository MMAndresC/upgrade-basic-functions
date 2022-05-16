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
