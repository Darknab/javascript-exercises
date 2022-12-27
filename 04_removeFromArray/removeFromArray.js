const removeFromArray = function(items) {
    //first argument is an array
    const arr = arguments[0];
    //if there is only one argument, don't remove anytning, return the array untouched
    switch (arguments.length) {
        case 0 :
        return "";
        case 1: 
        return arr;
        //make a loop that select items one by one and remove the actual item from the array each time
        default: 
        for (let j = 1; j < arguments.length; j++) {
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                if (item === arguments[j]) {
                    arr.splice(i, 1);   
                } 
            }            
        }
        return arr;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
