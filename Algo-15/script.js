let array = [1, 2, 3, 5, 6]

function fifteen(array) {
    for (let i = 0; i < array.length; i++)
        if (array[i] % 2 == 1) {
            console.log("false")
            return false
        }
    console.log("true")
    return true
}

fifteen(array)