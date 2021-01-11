const powerCalculator = (n, e) => {
    // Base Case
    if (e < 0){
        return 'Exponent should be >= 0'
    } else if (e === 0){
        return 1
    }
    // Recursive Case
    return n * powerCalculator(n, e - 1) 
}

console.log(powerCalculator(10, 2))
console.log(powerCalculator(12, 4))
console.log(powerCalculator(5, 0))
console.log(powerCalculator(7, -1))