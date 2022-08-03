// Declaring a variable
// keyword identificationl/variableName = value
var firstName = "Josephine";
let lastName ="Asare";
let age = 27;
let isMarried = true;
let children = ["Bright", "Simon", "Patrick"];
let other ={
    favoriteColor: "Gold",
    favoriteSport: "Soccer",
    favoriteFruit: "Apple",
};
const fullName = firstName + " "+ lastName; // concatenation
console.log(fullName);
const mySelf = `My name is ${firstName} ${lastName}.;`  //string interpolation

console.log(mySelf);

// STRINGS
let sentence = "This is a story about Josephine Asare in a Blind Spot"
console.log(sentence.length);
console.log(sentence.split("Josephine"));
console.log(sentence.replace("Josephine","Bertha"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("Spot"));
console.log(sentence.includes("in"));

//ARRAY
let days = ["Monday","Tuesday", "Wednesday", "Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());
days.unshift("sunday");
console.log(days)

days.unshift("saturday")
console.log(days)
console.log(days.indexOf("Wednesday"));
console.log(days[5]); //retrieving data
days[0] = "Sunday"; // change data in the array

//OBJECT
let person = {
    firstName: "Josephine",
    lastName: "Asare",
    age: 27,
};

console.log(person["firstName"]);
console.log(Object.keys(person));
console.log(Object.values(person))
console.log(Object.entries(person))
