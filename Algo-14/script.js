let array = [1, 2, 3, 5, 6]

function fourteen(array, number) {
    for (let i = 0; i < array.length; i++)
        if (number % array[i] != 0) {
            console.log("false")
            return false
        }
    console.log("true")
    return true
}

fourteen(array, 20)