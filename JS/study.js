// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function sameCase(a, b) {
    let first = a
    let second = b
    if (!first.match(/[a-z]/i) || !second.match(/[a-z]/i))
        return -1
    if ((first === first.toUpperCase() && second === second.toUpperCase()) || (first === first.toLowerCase() && second === second.toLowerCase())) {
        return 1
    } else {
        return 0
    }
}