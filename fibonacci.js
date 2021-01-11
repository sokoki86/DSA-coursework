
const fibonacci = (number) => {
    // Base Case
    if (number === 1) return [1]
    if (number === 2) return [1, 1]
    // Recursive Case
    const sequence = [...fibonacci(number - 1)]
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    return sequence
}

console.log(fibonacci(13))
console.log(fibonacci(7))
console.log(fibonacci(5))
console.log(fibonacci(2))