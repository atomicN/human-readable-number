module.exports = function toReadable(number) {
    const numbers = {
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    }

    let toStr = number.toString()
    let hundred
    let output

    if (toStr.length == 3) {
        hundred = toStr[0]
        toStr = `${toStr[1]}${toStr[2]}`
        output = `${numbers[hundred]} hundred `
    }

    if (+toStr < 21) output += numbers[toStr]
    else if (toStr.length == 2 && toStr[1] == 0) output += numbers[toStr]

    if (toStr.length == 2 && toStr[1] != 0 && toStr[0] != 1)
        output += `${numbers[toStr.split('')[0].concat('0')]} ${numbers[toStr.split('')[1]]}`

    if (number == 0) return 'zero'

    return output.split('undefined').join('').replace('  ', ' ').trim()
}
