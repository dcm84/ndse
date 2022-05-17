const { randomInt } = require('crypto')
const { appendFile } = require('fs/promises')
const readline = require('readline-promise');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

//найдем, куда сохранять логи
let file = null
if (argv['_'].length < 1) {
    console.log("Укажите имя файла для хранения логов в качестве параметра")
    process.exit(0)
} else {
    file = argv['_'][0]
}

console.log(`Будем сохранять данные в ${file}`)

console.log('Сыграем в игру Орел и решка?')

//откроем промисифицированный readline
const rlp = readline.default.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

(async() => {
    //играем в игру, пока у пользователя не сдадут нервы, и он будет вводить 1 или 2
    while (true) {
        let number = randomInt(1, 3)
        let win = false
        let answer = await rlp.questionAsync(
            'Я загадал 1 или 2?'
        );
        answer = parseInt(answer)
        if (answer == number) {
            win = true
            console.log("Вы победили!")
        } else if (answer != 1 && answer != 2) {
            console.log("Вы играете не по правилам!")
            break
        } else {
            console.log("Вы проиграли!")
        }
        await appendFile(file, win ? "1" : "0")

    }
    rlp.close();
})();