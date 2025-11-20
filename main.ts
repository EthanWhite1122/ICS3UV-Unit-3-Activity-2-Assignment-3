/**
 * @author Ethan White
 * @version 1.0.0
 * @date 2025-11-19
 * @fileoverview This program give you the proper change trying to give the least amount of coins
 */

// Read amount of cents from the user
let total: number = parseInt(prompt("Enter the total number of cents: ") || "0");

// Coin values
const TOONIE = 200;
const LOONIE = 100;
const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;

// Calculate each coin
let toonies = Math.floor(total / TOONIE);
total = total % TOONIE;
let loonies = Math.floor(total / LOONIE);
total = total % LOONIE;
let quarters = Math.floor(total / QUARTER);
total = total % QUARTER;
let dimes = Math.floor(total / DIME);
total = total % DIME;
let nickels = Math.floor(total / NICKEL);
total = total % NICKEL;
let pennies = total;

// Output
console.log("Toonies:  " + toonies);
console.log("Loonies:  " + loonies);
console.log("Quarters: " + quarters);
console.log("Dimes:    " + dimes);
console.log("Nickels:  " + nickels);
console.log("Pennies:  " + pennies);

console.log("\nDone.")