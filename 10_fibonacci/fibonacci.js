const fibonacci = function(num) {
    num = parseInt(num);
    if (num <= 0 ) {
        return "OOPS"
    }
    const elements = [0,0,1];
    for (i = 2; i <= num; i++) {
        elements[i + 1] = elements[i] + elements[i - 1];

    }
return elements[num + 1];
};

// Do not edit below this line
module.exports = fibonacci;
