"use strict";


// 1. isHometown
//Given a 'town', return 'True' if 'town' is 'San Francisco'.
function isHometown(town) {

    return town === 'San Francisco';
}

// 2. getFullName
// Given 'firstName' and 'lastName', return a full name.

function getFullName(firstName, lastName) {

    return `${firstName} ${lastName}`;
}


// 3. calculateTotal
// Return the total price of an item, figuring in state taxes and fees
function calculateTotal(basePrice, state, tax=0.05) {

    const subtotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state === 'PA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }

    return subtotal + fee;

}
