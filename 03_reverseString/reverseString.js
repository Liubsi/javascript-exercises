const reverseString = function(str) {
    let splitStr = str.split("");
    let reversed = "";
    for (let i = str.length-1; i >= 0; i --) {
        reversed += splitStr[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
