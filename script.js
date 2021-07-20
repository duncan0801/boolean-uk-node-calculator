// const fs = require("fs/promises")

function parseArgs(argsArray) {
    return argsArray.slice(2)
}
const parsedArgs = parseArgs(process.argv)
// const numberA = parsedArgs[0]
// const operator = parsedArgs[1]
// const numberB = parsedArgs[2]

// an accumulator for checking the array in blocks
// There's a lopo you can use that you can manipulate how many times

//Sort out the operator by:
//1. finding the operator in the array
//2. taking the indexOf that operator
//3. applying the relavent calculation to that operator using input n-1, n+1
//4. replacing operator with the answer to the calc at 3 using index of
//5. delete values n-1, n+1
//6. Repeat 
const arr = ["2", "*", "3", "+", "2", "*", "2"]

const performCalc = {
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
}
const acceptedOperators = Object.keys(performCalc)

function calculate() {
        for (operator of acceptedOperators) {
            for(n of parsedArgs) {
                let index = parsedArgs.indexOf(n)
                if(n === operator) {
                    let answer = performCalc[operator](Number(parsedArgs[index-1]), Number(parsedArgs[index+1]))
                    parsedArgs.splice(index-1, 3, answer)
                }
        }
    }
    return parsedArgs[0]
}
function areInputsNumerical() {
    let areInputsNumerical = true
    for(let i = 0; i < parsedArgs.length; i= i+2) {
        const input = Number(parsedArgs[i])
        if (isNaN(input)) {
            areInputsNumerical = false
            break
        } 
    }
    return areInputsNumerical
}
function areTrueOperatorsUsed() {
    let areTrueOperatorsUsed = true
    for(let i = 1; i < parsedArgs.length; i= i+2) {
        if (!acceptedOperators.includes(parsedArgs[i])) {
                areTrueOperatorsUsed = false
                break
            }
    }
    return areTrueOperatorsUsed
}

// const numberAType = Number(numberA)
// const numberBType = Number(numberB)

if (!areTrueOperatorsUsed()) {
    console.log("That is not an acceptable operator. Choose either \"*\",\"/\", \"+\", \"-\"")
    return false
}
if(!areInputsNumerical()) {
    console.log("One of your inputs is not a number. Please enter any number.")
    return false
} 
else {
    let answer = calculate(parsedArgs)
    console.log(`Your answer = ${answer}`)
}
