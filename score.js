const { readFile } = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

//найдем, где смотреть логи
let file = null
if (argv['_'].length < 1) {
    console.log("Укажите имя файла для хранения логов в качестве параметра")
    process.exit(0)
} else {
    file = argv['_'][0]
}

console.log(`Анализируем данные из ${file}`)

//читаем файл
readFile(file, "utf-8", (err, data) => {
    if (err) {
        console.log("Ошибка чтения файла!")
        process.exit(0)
    };

    let wins = (data.match(/1/g) || []).length
    let looses = (data.match(/0/g) || []).length
    let total = wins + looses

    console.log(`Всего партий: ${total}, побед: ${wins} (${Math.round(wins * 100/total)}%), поражений : ${looses} (${Math.round(looses * 100/total)}%)`);
});