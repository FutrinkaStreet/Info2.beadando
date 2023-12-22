"use strict";
function getRandomStrings(inputList) {
    if (inputList.length < 3) {
        throw new Error('Legalább 3 elemre van szükség a véletlenszerű sztringek kiválasztásához.');
    }
    const shuffled = inputList.sort(() => Math.random() - 0.5); // Lista véletlenszerű összekeverése
    return shuffled.slice(0, 3); // Visszaadjuk az első három elemet a kevert listából
}
// Példa használat:
const inputStrings = ['miért', 'ilyen', 'nehéz', 'ez', 'a', 'porgramozás'];
try {
    const randomStrings = getRandomStrings(inputStrings);
    console.log('Véletlenszerű sztringek:', randomStrings);
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
