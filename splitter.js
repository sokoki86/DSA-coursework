const stringSpliter = (string, separator) => {
    let result = []
    // Base Case
    if(!string.includes(separator)) return [string]
    let index = string.indexOf(separator)
    // Recursive Case
    result = [string.slice(0, index), ...stringSpliter(string.slice(index + 1), separator)]
    return result
}

console.log(stringSpliter("02/20/2020", "/"))
console.log(stringSpliter("Break Me Up", " "))