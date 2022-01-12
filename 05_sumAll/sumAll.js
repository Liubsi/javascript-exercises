const sumAll = function(first, second) {
    let large; 
    let small; 
    if (typeof first != "number" || typeof second != "number" || first < 0 || second < 0) return "ERROR";
    else if (first > second) {
        large = first; 
        small = second; 
    }
    else {
        large = second; 
        small = first; 
    }
    let sum = 0; 
    for (let i = large; i >= small; i --) {
        sum += i;   
    }

    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
