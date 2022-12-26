const repeatString = function(string, num) {
if (num === 1) {
    return string;
} else if (num === 0){
    return "";
} else if (num < 0) {
    return "ERROR";
}

let i = 1;
let retString = string;
while (i < num ) {
    
    retString += string;
    i++;
}
return retString;
};

// Do not edit below this line
module.exports = repeatString;
