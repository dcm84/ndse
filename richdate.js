const yargs = require('yargs/yargs')

const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let day = parseInt('d' in argv ? argv['d'] : ('day' in argv ? argv['day'] : 0))
let month = parseInt('m' in argv ? argv['m'] : ('month' in argv ? argv['month'] : 0))
let year = parseInt('y' in argv ? argv['y'] : ('year' in argv ? argv['year'] : 0))

let date = new Date()

if (argv['_'].find(el => el == "current")) {
    console.log(date)
} else if (argv['_'].find(el => el == "add")) {
    date.setDate(date.getDate() + day)
    date.setMonth(date.getMonth() + month)
    date.setFullYear(date.getFullYear() + year)
    console.log(date)
} else if (argv['_'].find(el => el == "sub")) {
    date.setDate(date.getDate() - day)
    date.setMonth(date.getMonth() - month)
    date.setFullYear(date.getFullYear() - year)
    console.log(date)
} else {
    console.log("Используйте ключи current, add или sub")
}