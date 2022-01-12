const removeFromArray = function(a, ...args) {
    let removed = [];
    for (let i = 0; i < a.length; i ++) {
        if (!args.includes(a[i])) {
            removed.push(a[i]);
        }
    }

    return removed;
};  

// Do not edit below this line
module.exports = removeFromArray;
