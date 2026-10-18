// Built-In Methods

// Array

// 1. concat()
const array1 = [100, 101];
const array2 = [207, 208];
const array3 = ["a", "b"]
const array4 = array1.concat(array2, array3);
console.log(array4);    // output: [100, 101, 201, 202, 'a', 'b']

// 2. fill()
const array = [1, 2, 3, 4, 5, 6];
console.log(array.fill(0, 2, 4))    // output: [1, 2, 0, 0, 5, 6]
console.log(array.fill(5, 1))       // output: [1, 5, 5, 5, 5, 5]
console.log(array.fill(6));         // output: [6, 6, 6, 6, 6, 6]

// 3. filter()
const scores = [90, 80, 40, 50, 85]
const passed = scores.filter((score) => score > 75)
console.log(passed)     // output: [90, 80, 85]

// 4. map()
const angka = [1, 4, 9, 16];
const mapped = angka.map((x) => x * 2)
console.log(mapped)     // output: Array [2, 8, 18, 32]

// 5. some()
const bilangan = [1, 2, 3, 4, 5];
const genap = (element) => element % 2 === 0;
console.log(array.some(genap));     // output: true

// ------------------------- //

// Number

// 1. isFinite()
console.log(Number.isFinite(1 / 0))     // output: false
console.log(Number.isFinite(10 * 5))    // output: true
console.log(Number.isFinite(0 / 0))     // output: false

// 2. isInteger()
console.log(Number.isInteger(2))        // output: true
console.log(Number.isInteger(2.5))      // output: false

// 3. parseInt()
Number.parseInt("  42  ", 10)   // output: 42
Number.parseInt("42px", 10)     // output: 42
Number.parseInt("abc123", 10)   // output: NaN
Number.parseInt("3.14", 10)     // output: 3
Number.parseInt("101", 2)       // output: 5

// 4. toFixed()
const num = 123.4567
num.toFixed()     // output: '123'
num.toFixed(2)    // output: '123.45'

// 5. toString()
console.log((20).toString())    // "20"
console.log((17.2).toString())  // "17.2"
console.log((6).toString(2))    // "110"

// ------------------------- //

// String

// 1. repeat()
console.log("* ".repeat(3))     // output: "* * * "

// 2. slice()
console.log(kalimat.slice(0, 7))    // output: "Kemarin"" ada mobil mencurigakan di depan pintu."
console.log(kalimat.slice(7))       // output: " ada mobil mencurigakan di depan pintu."
console.log(kalimat.slice(-3))      // output: "tu."

// 3. split()
console.log("Ini Budi.".split(" "))     // output: ["Ini", "Budi."]
console.log("Ini-ibu-Budi.".split("-")) // output: ["Ini", "ibu", "Budi."]

// 4. toUpperCase()
const sentence = "Balonku ada lima."
console.log(sentence.toUpperCase())     // output: "BALONKU ADA LIMA."

// 5. trim()
console.log(greeting.trim("   Hello world!   ")) // output: "Hello world!";

// ------------------------- //

// Math

// 1. Math.abs()
console.log(Math.abs(1-12))     // output: 11
console.log(Math.abs(1.2-7.9))  // output: 6.7

// 2. Math.round()
console.log(Math.round(1.49))   // output: 1
console.log(Math.round(5.5))    // output: 6
console.log(Math.round(-5.05))  // output: -5

// 3. Math.max()
const arrayMax = [-1, -2, -3]
console.log(Math.max(...arrayMax)) // output: -1
console.log(Math.max(1, 2, 3))  // output: 3
console.log(Math.max())         // output: -Infinity

// 4. Math.min()
const arrayMin = [2, 3, 1];
console.log(Math.min(...arrayMin))     // output: 1
console.log(Math.min(-2, -3, -1))   // output: -3
console.log(Math.min())             // output: Infinity

// 5. Math.random()
console.log(Math.pow(5, 3))     // output: 125
console.log(Math.pow(4, 0.5))   // output: 2
console.log(Math.pow(-7, 0.5))  // output: NaN

// -------------------------------------------------- //

// Built-In Functions

