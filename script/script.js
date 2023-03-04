//Минимал - 1

//example #1
function first() {
    console.log ('First test function!');
}

first();

//example #2
let secondEx = function(){
    console.log('My second own function without any tips!');
}
secondEx();

//example #3
function parametr (lenght, width){
    return(lenght, width)
}
console.log(parametr(13,22));


//Минимал - 2
let numberA = prompt("Число №1");
let numberB = prompt("Число №2")  
function countArg(numberA,numberB){
    console.log(arguments.length);
}
console.log(countArg());

//Минимал - 3
function count(){
    let a = +prompt("первое число");
let b = +prompt("второе число");
    if(a<b){
        return -1;
    }
    else if(a>b){
   return 1;
    }
    else{
  return 0;
    }
}
console.log(count());


//Минимал - 4
let n = prompt ("предоставьте число для поиска факториaла");
function countFactorial(n){
if (n<=1){
    return 1;
}
else{
    return n * countFactorial(n - 1);
}
}
console.log(countFactorial(n));

//Минимал - 5
let a = prompt("Число №1");
let b = prompt("Число №2");
let c = prompt("Число №3");
function numbers(){
return parseInt(a+b+c);
}
console.log(numbers());

//Минимал - 6
let length = +prompt("Задай довжину");
let width = +prompt("Задай ширину");
function square(length, width=length ) {
  if (width === undefined) {
    width = length;
  }
  else{
    length = width;
  }
  let squareSize = length * width;
  return squareSize;
}
console.log(square());
