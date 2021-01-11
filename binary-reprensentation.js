const binary = (num) => {
    if (num === 0) {
        return 0
    }

    const div = Math.floor(num/2)
    const remainder = num % 2
    if (div === 0) {
        return `${remainder}`;
    }
    return binary(div) + remainder.toString()
}

console.log(binary(25))
console.log(binary(0))
console.log(binary(3))