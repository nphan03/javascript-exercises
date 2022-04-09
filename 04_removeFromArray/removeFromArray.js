const removeFromArray = function(...args) {
    let array = args[0];
    let filtered=[];
    array.forEach(element => {
        if(!args.includes(element)){
            filtered.push(element);
        }
    })
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
