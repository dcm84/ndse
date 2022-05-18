//читаем окружение (можно и через скрипт dev)
require('dotenv').config()

const http = require('http')

if (process.argv.length != 3) {
    console.log("Укажите город, в котором вы хотите узнать погоду")
    process.exit(0)
}

const myAPIKEey = process.env.weatherAPIKey

const url = `http://api.weatherstack.com/current?access_key=${myAPIKEey}&query=${process.argv[2]}&units=m`

http.get(url, (response) => {
    const statusCode = response.statusCode

    if (statusCode !== 200) {
        console.error(`Произошла ошибка: ${statusCode}`)
        return
    }

    response.setEncoding('utf8')

    let rawData = ''
    response.on('data', (chunk) => rawData += chunk)
    response.on('end', () => {
        let parsedData = JSON.parse(rawData)
        console.log(parsedData)
    })
})