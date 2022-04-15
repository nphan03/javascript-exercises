const palindromes = function (str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
    return cleanedStr
        .split('')
        .reverse()
        .join('') === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
