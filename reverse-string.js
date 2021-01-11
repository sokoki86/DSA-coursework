const reverseString = (string) => {
    // Base Case
    if (string.length === 1) {
        return string
    }
    // Recursive Case
    return string[string.length - 1] + reverseString(string.slice(0, -1))
}

console.log(reverseString('thinkful'))
console.log(reverseString('german'))
console.log(reverseString('a'))