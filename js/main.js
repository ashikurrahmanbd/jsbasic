// variable
let name = "Ashik"
const AnotherName= "shafiq"
var sisterName = "Jannat"

// function

// way1
function displayName(){
    console.log("Hello my name is Ashik");
}

// way2
const showName = () => {
    console.log("another function name");

}

// parameterized function

const welcomeStudent = (name) => {
    console.log("Hello "+name+ " Congratulations");
}

// simple addition funciton

const addition = (a, b) => {
    return a + b;
}

// array
const friends = ['Ashik', 'shafiq', 'Akash'];

// preview the array with for
for(let i = 0; i<friends.length; i++){
    console.log(friends[i]);
}

// preview the array with foreach
friends.forEach(element => {
    console.log(element)
});

// simple even  finder

// for(let i = 0; i < 100; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

let count = 0;
count += 20;

count -= 10;

count *= 10;

count %= 2; // here the count value again 0

console.log(count)

// js object

const car = {
    name: 'Tyota',
    model: 1980,
    color: "white",
    engineType: ['EV', 'Petrol'],

}

// accessing object
console.log(car.name);
console.log(car.engineType[0]);


// javascript event listener

// onclick
// onchange
// onmouseover
// onmouseout
// onkeydown
// onload


// onclick
// if i use const for the title it will not work
let title = document.getElementById('title');

const myBtn = document.getElementById('btn');


myBtn.addEventListener('click', () => {
    title.innerHTML = 'New text';
})

// some string operation
let display = document.getElementById('info');

let myString = "Ami tumake valobashi";

let stringCount = myString.length;


display.innerHTML = myString +" "+ stringCount;

// string extracting three medthods
// slice(start, end)
// substring(start, end)
// substr(start, end)

let textSlice = myString.slice(3, 7);

display.innerHTML = textSlice;


// new string
let newString = "Ami bangladeshe Thaki";
let textSubString = newString.substring(0, 10);

display.innerHTML = textSubString;


// coverting array to string
const fruits = ['Banana', 'Apple', 'Orrange'];

display.innerHTML = fruits.toString();

fruits.pop();

fruits.push("Kola")

fruits.sort();

fruits.reverse();

display.innerHTML = fruits.join(" * ");


// Array iteration

let myNumbers = [10, 50, 5, 2, 40, 100];

let anotherDisplay = document.getElementById('info');

myNumbers.forEach(myNumberFunction);

function myNumberFunction(value, index, array){
    
    anotherDisplay.innerHTML += value+"<br/>";

}


// break
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    

    console.log(i)
    // the iteration will be stoped before 3
}

// js Class

class Human{

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

}

let manOne = new Human("Ashikur rahman", 1996);

console.log(manOne.name)


// Json

{
    "employees" ; [
        {"firstName" : "jhon", "lastName" : "Doe"},
        {"firstName" : "jhon", "lastName" : "Doe"},
        {"firstName" : "jhon", "lastName" : "Doe"}
    ]
}

// js sets





























