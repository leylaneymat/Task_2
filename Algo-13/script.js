function thirteen(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = str.split('').reverse().join('');
    console.log(str === reversedStr)
    return str === reversedStr;
}

thirteen("Leyla")
thirteen("aha")