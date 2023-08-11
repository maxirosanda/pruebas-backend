
/*
 array => [1, 2, 3, 4, 5] 
largo array => 5 elementos
posiciones de 0 a 4
                 =>  0    1    2    3    4   |   5    6 .......
  .... -7    -6   | -5   -4   -3   -2   -1   => 
{ busca desde 0}    {busca desde la posicion} {no busca si el indice es mayor al largo}
*/

const numbers = [1, 2, 3, 4, 5];


//console.log(numbers.includes(1, -1)); // false
//console.log(numbers.includes(4,-3))   // true
//console.log(numbers.includes(3, -7)); // true

/*
const messageText = "Hola, ¿cómo estás?"
largo texto => 18 caaracteres
......-2   -1  | 0    1   2   3   4   5   6    ..... 17 | 18 ........
{busca desde 0}  {busca desde la posicion del caracter}  {no busca si el indice es mayor al largo}
*/
const messageText = "Hola, ¿cómo estás?";

//console.log(messageText.includes("cómo",4)); // true
//console.log(messageText.includes("Hola", 18)); // false


//ejercicio clase 2 include y potencia
function powerOperation(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes('**')) {
        const [baseStr, exponentStr] = arr[i].split('**');
        const base = baseStr != "" ? Number(baseStr) :  NaN
        const exponent = exponentStr!= "" ? Number(exponentStr) : NaN
        if (!isNaN(base) && !isNaN(exponent)) {
          const result = base ** exponent;
          arr[i] = result.toString();
        } else {
            arr[i] = "invalida"; // No se pudo realizar la operación debido a datos inválidos
        }
      }else{
        arr[i] = "invalida"
      }
    }
  
    return arr;
  }
  
  // Ejemplo de uso:
  const arr = ['6**2', '**', '3**3', '4**', '4**5', '8**2**', '4*=5'];
  const result = powerOperation(arr);
  //console.log(result); // Salida: [ '36', invalida, '27', invalida, '1024',64,invalida' ]
 
  class Person {
    constructor(name, age, city) {
      this.name = name
      this.age = age
      this.city = city
    }
  }
  
  // Creamos una instancia de la clase "Person"
  const person = new Person('John', 30, 'New York')
  
  // Agregamos una propiedad al prototipo de la clase para demostrar que no la enumerará
  Person.prototype.gender = 'Male'
  
  // Función para obtener los valores enumerables propios del objeto
  function getEnumerableValues(obj) {
    const valuesArray = []
    for (const key in obj) {
        valuesArray.push(obj[key])
    }
    return valuesArray
  }
  
  // Ejemplo de uso:
  console.log(getEnumerableValues(person))
  console.log(Object.values(person))