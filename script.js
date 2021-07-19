// const fs = require("fs/promises")

function parseArgs(argsArray) {
    return argsArray.slice(2)
}
const parsedArgs = parseArgs(process.argv)
const numberA = parsedArgs[0]
const operator = parsedArgs[1]
const numberB = parsedArgs[2]

const performCalc = {
    "*": numberA * numberB,
    "/": numberA / numberB,
    "+": numberA + numberB,
    "-": numberA - numberB
}

const numberAType = Number(numberA)
const numberBType = Number(numberB)

const acceptedOperators = Object.keys(performCalc)

if (!acceptedOperators.includes(operator)) {
    console.log("That is not an acceptable operator. Choose either \"*\",\"/\", \"+\", \"-\"")
}

if(isNaN(numberAType) || isNaN(numberBType)) {
    console.log("One of your inputs is not a number. Please enter any number.")
} 
else {
    let answer = performCalc[operator]
    console.log(`${numberA} ${operator} ${numberB} = ${answer}`)
}
