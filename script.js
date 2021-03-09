const pwElement = document.getElementById('pw')
const copyElement = document.getElementById('copy')
const lenElement = document.getElementById('len')
const upperElement = document.getElementById('upper')
const lowerElement = document.getElementById('lower')
const numberElement = document.getElementById('number')
const symbolElement = document.getElementById('symbol')
const generateElement = document.getElementById('generate')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_'

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    const len = lenElement.value
    let password = ''

    if(upperElement.checked) {
        password += getUppercase()
    }
    if(lowerElement.checked) {
        password += getLowercase()
    }
    if(numberElement.checked) {
        password += getNumber()
    }
    if(symbolElement.checked) {
        password += getSymbol()
    }

    for(let i = password.length; i < len; i++) {
        const x = generateX()
        password += x
    }

    pwElement.innerText = password
}

function generateX() {
    const xs = []
    
    if(upperElement.checked) {
        xs.push(getUppercase())
    }
    if(lowerElement.checked) {
        xs.push(getLowercase())
    }
    if(numberElement.checked) {
        xs.push(getNumber())
    }
    if(symbolElement.checked) {
        xs.push(getSymbol())
    }
    if(xs.length === 0) return ''

    return xs[Math.floor(Math.random() * xs.length)]
}

generateElement.addEventListener('click', generatePassword)

copyElement.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = pwElement.innerText

    if(!password) return

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
})