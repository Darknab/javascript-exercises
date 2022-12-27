const sumAll = function() {
    //make a function that makes simply the sum
    const sum = function(num1,num2) {
        let sum = num1;
        for (i = (num1 + 1); i <= num2; i++) {
            sum += i;
        }
        return sum;
    }
    //switch for the diffrent  cases possible
    if (arguments[0] > arguments[1]) {
        return sum(arguments[1],arguments[0]);
    } else {
        if (arguments[0] < 0 || arguments[1] < 0) {
            return "ERROR";
        } else {
            if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
                return "ERROR";
            } else {
                return sum(arguments[0],arguments[1]);
            }
        }
    }

};

// Do not edit below this line
module.exports = sumAll;
