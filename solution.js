const descendingOrder = n => {
    array = Array.from(String(n), Number)
    array.sort((x, y) => y - x)
    return +array.join('')
}

console.log(descendingOrder(0)) // 0
console.log(descendingOrder(1)) // 1
console.log(descendingOrder(111)) // 111
console.log(descendingOrder(15)) // 51
console.log(descendingOrder(1021)) // 2110