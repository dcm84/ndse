const { randomInt } = require('crypto')
const { exit } = require('process')
const readline = require('readline')
const border = randomInt(1000)

number = randomInt(border)
console.log(`Мы загадали число от 0 до ${border}, угадывайте!`)

const input = readline.createInterface(process.stdin)

input.on('line', (data) => {
    currentNumber = parseInt(data)
    if (currentNumber == number) {
        console.log("Поздравляем, Вы угадали число!")
        exit(0)
    }
    console.log(currentNumber > number ? "Меньше" : "Больше")
})