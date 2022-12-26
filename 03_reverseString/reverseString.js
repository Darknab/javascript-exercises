const reverseString = function(string) {
    if (string.length === 0) {
        return "";
    }
    const letters = [];
    const revLetters = [];
    for (i = 0; i < string.length; i++) {
      letters[i] = string.substr(i,1); 
      revLetters.unshift(letters[i]); 
    }
    
    
    return revLetters.join("");
    }

// Do not edit below this line
module.exports = reverseString;
