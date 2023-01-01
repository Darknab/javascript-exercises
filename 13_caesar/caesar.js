const caesar = function(text,shift) {
//convert the text to an array and convert characters to unicode
const letters = []
for (let i = 0; i < text.length; i++) {
    letters[i] = text.charCodeAt(i);
}
while (shift > 26) {
    shift -= 26;
}
while (shift < -26) {
    shift+= 26;
}
const chiftedLetters = []
//shift the unicode letters and leave spaces and ponctuation
for (let i = 0; i < letters.length; i++){
    if (64 < letters[i] && letters[i] < 91) {
        chiftedLetters[i] = letters[i] + shift;
        if (chiftedLetters[i] > 90) {
            chiftedLetters[i] -= 26;
        } else if (chiftedLetters[i] < 65) {
            chiftedLetters[i] += 26;
        }
    }
    else if (96 < letters[i] && letters[i] < 123) {
        chiftedLetters[i] = letters[i] + shift;
        if (chiftedLetters[i] > 122) {
            chiftedLetters[i] -= 26;
        } else if (chiftedLetters[i] < 97) {
            chiftedLetters[i] += 26;
        }
    } else chiftedLetters[i] = letters[i];

}
//reconvert unicode to letters
for (let i = 0; i < chiftedLetters.length; i++) {
    chiftedLetters[i] = String.fromCharCode(chiftedLetters[i]);
}

//convert the result array to a string and return it
return chiftedLetters.join("");
};

// Do not edit below this line
module.exports = caesar;