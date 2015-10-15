'use strict';

var scramble = function (word) {
    var letters = word.split("");
    console.log('Print letters:' + letters);
    var lengthLetters = letters.length;

    for(var i = lengthLetters - 1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        console.log("randomIndex" + randomIndex);
        var tmp = letters[i];
        console.log("this is temp: " + tmp);
        letters[i] = letters[randomIndex];
        letters[randomIndex] = tmp;
    }
    return letters.join("");
};
    scramble("Butts");