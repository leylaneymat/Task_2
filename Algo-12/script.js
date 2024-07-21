let array = [1, 2, 3, 5, 6]

function eleven(array) {
    let min = array[0];
    let max = array[array.length - 1];
    let missingNumber = 0;
    array.sort((a, b) => a - b);
    for (let i = min; i <= max; i++) 
        if (!array.includes(i)) {
            missingNumber = i;
            break;
        }
    console.log(missingNumber)
}

eleven(array)