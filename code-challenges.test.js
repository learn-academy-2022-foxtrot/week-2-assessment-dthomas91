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

// ReferenceError: divisableByThree is not defined
// Expected output: "15 is divisible by three"

const object2 = { number: 0 }

describe("divisableByThree", () => {
  it("returns if number is divisable by 3", () => {
    expect(divisableByThree(0)).toEqual("0 is divisable by 3")
  })
})

// ReferenceError: divisableByThree is not defined
// Expected output: "0 is divisible by three"

const object3 = { number: -7 }

describe("divisableByThree", () => {
  it("returns if number is divisable by 3", () => {
    expect(divisableByThree(-7)).toEqual("-7 is not divisable by 3")
  })
})

// ReferenceError: divisableByThree is not defined
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

// Psuedocode
// Create a variable called divisableByThree
// create a parameter of (number) within the variable
// creating condintional statement using if/else if 

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

describe("combinedList", () => {
  it("returns a combined list of nouns", () => {
    expect(combinedList()).toEqual("streetlamp", "potato", "teeth", "conclusion", "nephew")
  })
})

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]



// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
