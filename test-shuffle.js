
const s = require('./shuffle')

const arrayOfWords = ['the', 'Cow', 'Jumped', 'over', 'the', 'moon']

const shuffled = s.shuffle(arrayOfWords).join(' ').toLowerCase()

console.log(shuffled.charAt(0).toUpperCase())

const newStr = shuffled.replace(shuffled.charAt(0), shuffled.charAt(0).toUpperCase())


console.log(newStr)
