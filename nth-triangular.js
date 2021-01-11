const nth = (num) => {
    // Base Case
    if(num === 0){
        return 0
    }
    // Recursive Case
    return num + nth(num-1)
};

console.log(nth(8))
console.log(nth(13))
console.log(nth(4))