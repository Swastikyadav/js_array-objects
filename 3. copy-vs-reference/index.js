// Value of x, y, a, b

var x = 10; // 10 
var y = "abc"; // "abc"
var a = x; // 10
var b = y; // "abc"

// Value of x, y, a, b
var x = 10; // 10
var y = "abc"; // "abc"
var a = x; // 10
var b = y; // "abc"
a = 5; // 5
b = "def"; // "def"

// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);

// arr;
  // [1, 2]
// arrCopy
  // [1, 2]

// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" };

// obj;
  // {surname: "florance"}

// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);
  // true - both arr and arr2 are referencing to the same array.

// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2);
    // false - although the value is same, but they are referencing to diff arrays.
console.log(arr == arr2);
    // false - for the same reason as above.

//What's the output
console.log([10] === [10]);
  // false - both are referencing to different arrays.

// What's the output?

function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);
  // true - referencing to same array. 
  // object;
   /* {
     newArray : [10],
   }
   */

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a); // 10
console.log(b); // 5 - a assigned to b at line 85, but a reassigned at line 86.
                // For variables there is no passing by reference.

// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a); // {a : 1,}
console.log(b); // {a : 1,}

// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); // true - referencing to the same array.

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};

var clone = {};

for (let key in person) {
  clone[key] = person[key];
}
