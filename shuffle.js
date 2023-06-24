'use strict';
const seedrandom = require('seedrandom')

function shuffle(array, seed) {

    const randomNumberGenerator  = seedrandom(seed);

    let m = array.length
    let t
    let i

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(randomNumberGenerator() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}


module.exports = { shuffle }
