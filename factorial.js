const factorial = (number) => {
    // Base Case
    if(number === 0) return 1
    // Recursive Case
    return number * factorial(number - 1)
}

console.log(factorial(10))
console.log(factorial(7))
console.log(factorial(5))