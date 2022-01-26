// generate_short_path.js

// define sample function to randomly return a item in an array
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

// define generate short path function
function generateShortPath() {
    // define things user might want
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    // create a collection to store things user picked up
    let collection = []
    collection = collection.concat(lowerCaseLetters.split(''))
    collection = collection.concat(upperCaseLetters.split(''))
    collection = collection.concat(numbers.split(''))

    let password = ''
    for (let i = 0; i < 5; i++) {
        password += sample(collection)
    }
    // return the generated password
    return password
}
module.exports = generateShortPath