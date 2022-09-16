// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022"
// console.log(cohort.split(""))

// a) Your answer: It will log "Foxtrot", "2022"
// b) Verify and explain: it logged [
//   'F', 'o', 'x', 't',
//   'r', 'o', 't', ' ',
//   '2', '0', '2', '2'
// it did this becaus the .split did not have a space between the quotes, for exampls cohort.split(" ")

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: it will log undefined
// b) Verify and explain: it logged undefined becuase name was never given a value.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: undefined
// b) Verify and explain: it logged [ 8, 10, 12, 14, 16 ]. I think it worked because the the ((number) after the .map automatically represents the value within the array.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:[11, 13, 15] it worked because the .filter((number) takes the value of each number and then it runs through the modulo of 2 requring the final number to be anything but 0. If the final number was not 0 we know the number in the array was an odd number.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: it logged JavaScript as expected. This happened because by doing a console.log for myCodingSkills.languages we are only going to return the strings defined under languages. Then by loging the [0] after myCodingSkills.languages we are telling it to only retrieve what value of the 0 index which is JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }... I think it logged this because by using learnStudent = new Learn you are taking everything withing the variable to Learn and now placing it into learnStudent. By adding ("George") after new Learn it is replacing this.student which currently equals name, and George is taking the place of the name. I am honestly having a hard time keeping up with all that is going on here. I am goin to reveiw the syllabus and lecture notes to see if I can figure it out.