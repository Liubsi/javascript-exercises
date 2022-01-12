const repeatString = function(str, strOccur) {
    let value = "";
    if (strOccur < 0) {
        return "ERROR";
    }
    for (let i = 0; i < strOccur; i ++) {
        value += str; 
    }
    return value;
};

// Do not edit below this line
module.exports = repeatString;
