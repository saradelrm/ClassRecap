/**
 * @VAIRABLES
 * 
 */

 //Declaration & Different tpes
 //Placeholder to store some value
 var me = "Marten"

 //Const = Constant and van not be reassigned
 const person1 = "Marten"
 person1 = "Tom"


 function myfunction () {
     let //The only difference btween var and let is scoping, if qe change let for var, we will be able to access to this variable
        // from any different part in the whole code, where let only works in the scope where it has been declared
 }

 //Aritmetic operations

 const num1 = 1
 const num2 = 2 // if we ha '3' instead, the result of an addition operation would be 13, therefore, we are concatenating these two values
                //java determines the type of value, if we try to multiplicate both values it would work as numbers, because the 
                // '*' is not defined as a valid string operation, where '+' means concatenation. to make sure it would always wor we could use the
                // the funtion Num(num2) 

 console.log(num1 + num2)

 /**
  * @STATEMENTS & @TERNARY
  */
  //Sytax
  let n =2 
  if(1 === 1 ){
    console.log(' 1 = 1')
  } else if (n === 2){
      console.log('n = 2')
     } else {
        console.log('n is neither 1 or 2')
     } //make sure to include a return just in case we have an error


  if (typeof username == 'String'){ //make sure the username is a string
  }

  //Ternary operator
  //condition ? code that should run if condition is true : code that should run if the condition is false
  n === 2 ? console.log('n is 2'): console.log ('n is not equal 2')

  switch (n){
        case 'orange': console.log('It is an Orange!') ;
        break;
        case'mango': console.log('It is a Mango!') ;
        break;
        default:
        console.log(`Sorry, we don't know that fruit...`) ;
  }

  /**
   * @FUNTIONS
   */
  //Function syntax

  myfunction()
  myNewfunction() //this one won't execute since it has not been created yet

  //Declaration Expression, Arrow Funtions (ES6)

  function myfunction() {  //Funtion declaration
    console.log('declaration')
  }

  const mynNewfuntion = function() { //Function expression
    console.log('expression')
  }

//Arrow funtions
const myThirdFuntion = () => {
    console.log('this is an arrow function')
}

const myThirdFuntion = () => console.log('this is an arrow function') //If we want to return something straight away we can use this expression
                                                                        //This is for hypsters - JUST USE THE OLD WAY

myThirdFuntion()

  //The main differentce between both declarations lays on the execution. When we use the first format are able to call a Function before it is declared within the code

//Paremeters & arguments

const multiplyByHundred = (num1, num2, num3 = 5) => { //num3= 5 automatically replaces the argument for 5 in case it is not a number
    const factor = 100
    let result= num3*factor+num1, num2
    return result                                   // if a funtion does not return any value it is a void function
}
const number = 'this is not a number'
const myResult = multiplyByHundred (1,2)

const myResult = 503
console.log(multiplyByHundred(1,2))


/**
 * @ARRAYS
 */
 const cars = []
 const numbers = [1,4,5,2,9,7] //list that contains our items
 const people = ['Jan', 'Henrik', 'Jerry', 'Phil']
 const bmw = '3 series'
 cars.push(bmw)

 //Declaration

 //Methods
 console.log (cars[bmw])

 //Find

const indexOfJerry = people.find(function(perons){
    return person == 'Jerry'
})

console.log(indexOfJerry)
 
//Sort

 people.forEach(function(person){
     console.log(person)
 })

 function forEachElement (callback){
    for(let i = 0; i< people.length; i++){
        callback(people[i], i)
    }
 }

 forEachElement(function(person, index){
    console.log(`${person} has index of ${index}`)
 })

 /**
  * 
  * @OBJECTS
  */

  //Object declaration
//Every object in js has a prototype, it is the same as a class, every object that has a prototype is able to perform different actions
  let marten = {
      first: 'Marten',
      second: 'Sievers',
      getFullName() {               //we can create methods within objects
          console.log(this.first + this.last)
      }
  }
  console.log (marten.getFullName())
  console.log (marten.toString())
  console.log (people.toString()) //toString() method makes a string instance of the actual array



