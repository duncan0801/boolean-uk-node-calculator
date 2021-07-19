// const fs = require("fs/promises")

function parseArgs(argsArray) {
    return argsArray.slice(2)
}

const parsedArgs = parseArgs(process.argv)

const numberA = parsedArgs[0]
const operand = parsedArgs[1]
const numberB = parsedArgs[2]

const performCalc = {
    "*": numberA * numberB,
    "/": numberA / numberB,
    "+": numberA + numberB,
    "-": numberA - numberB
}
let answer = performCalc[operand]

console.log(`${numberA} ${operand} ${numberB} = ${answer}`)