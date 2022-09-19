// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }

describe("divisableByThree", () => {
  it("returns if number is divisable by 3", () => {
    expect(divisableByThree(15)).toEqual("15 is divisable by 3")
  })
})

// // ReferenceError: divisableByThree is not defined
// // Expected output: "15 is divisible by three"

const object2 = { number: 0 }

describe("divisableByThree", () => {
  it("returns if number is divisable by 3", () => {
    expect(divisableByThree(0)).toEqual("0 is divisable by 3")
  })
})

// // ReferenceError: divisableByThree is not defined
// // Expected output: "0 is divisible by three"

const object3 = { number: -7 }

describe("divisableByThree", () => {
  it("returns if number is divisable by 3", () => {
    expect(divisableByThree(-7)).toEqual("-7 is not divisable by 3")
  })
})

// // ReferenceError: divisableByThree is not defined
// // Expected output: "-7 is not divisible by three"


// // b) Create the function that makes the test pass.

// // Psuedocode
// // Create a variable called divisableByThree
// // create a parameter of (number) within the variable
// // creating condintional statement using if/else if 

const divisableByThree = (number) => {
  if (number % 3 == 0) {
    return `${number} is divisable by 3`
  } else if (number % 3 !== 0) {
    return `${number} is not divisable by 3`
  } else {
    "something went wrong"
  }
}

//  PASS  ./code-challenges.test.js

// NOTE: You have no idea how much time I spent on this to no avail. Then I went to work on something else and when I came back I knocked this out within just a few minutes. Yay for mental breaks!


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

describe("capitolizedList", () => {
  it("returns capitalized words", () => {
    expect(capitolizedList(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitolizedList(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

//     ReferenceError: combinedList is not defined

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]


// b) Create the function that makes the test pass.

// Psuedocode
// Creating a function called capitolizedList
// pass an array into that function with (array)
// Use the .map(()) method to run through the array and return a new array with a string datatype
// return the strings 0 index with [0] and uppercase it with .toUpperCase
// reattach the 0 index of the string with the rest of the word starting at the 1 index using .substring(1)

const capitolizedList = (array) => {
  return array.map((string) => {
      return string[0].toUpperCase() + string.substring(1)
  })
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"

describe("indexOfVowel", () => {
  it("returns the index of the first vowel", () => {
    expect(indexOfVowel(vowelTester1)).toEqual(1)
  })
})

//    ReferenceError: indexOfVowel is not defined
// // Expected output: 1

const vowelTester2 = "academy"


describe("indexOfVowel", () => {
  it("returns the index of the first vowel", () => {
    expect(indexOfVowel(vowelTester2)).toEqual(0)
  })
})

//     ReferenceError: indexOfVowel is not defined
// // Expected output: 0

const vowelTester3 = "challenges"

describe("indexOfVowel", () => {
  it("returns the index of the first vowel", () => {
    expect(indexOfVowel(vowelTester3)).toEqual(2)
  })
})

// ReferenceError: indexOfVowel is not defined
// // Expected output: 2

// b) Create the function that makes the test pass.

// Psuedocode
// Create a function called indexOfVowel
// Add a string into the parameters of the function
// create a for loop for the index of the string
// create an if statement to determine which index the vowels are in

const indexOfVowel = (string) => {
  for (let i = 0; i < string.length; i++) {
    if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
      return i }
  }
  }

  // PASS  ./code-challenges.test.js
// console.log(indexOfVowel)