// What is JavaScript?

// JavaScript is a high-level, interpreted, dynamically typed, single-threaded programming language that follows event-driven, functional, and object-oriented paradigms.

// Deep Dive into Each Type
// 1. String
// javascript

// // Creation
// let str1 = "double quotes";
// let str2 = 'single quotes';
// let str3 = `template literal`; // Can embed variables ${}

// // Strings are immutable
// let str = "Hello";
// str[0] = "J";  // Doesn't work
// console.log(str); // "Hello" (unchanged)

// // String methods (return new strings)
// "hello".toUpperCase(); // "HELLO"
// "  trim  ".trim();     // "trim"
// "abc".slice(1, 2);     // "b"

// 2. Number
// javascript

// // Special numeric values
// typeof NaN;        // "number" (Not a Number)
// typeof Infinity;   // "number"
// typeof -Infinity;  // "number"

// // NaN is weird
// NaN === NaN;       // false (use isNaN() or Number.isNaN())
// isNaN(NaN);        // true
// Number.isNaN(NaN); // true

// // Floating point precision issues
// 0.1 + 0.2;         // 0.30000000000000004 (not 0.3!)
// // Fix: (0.1 * 10 + 0.2 * 10) / 10 = 0.3

// // Number limits
// Number.MAX_VALUE;  // 1.7976931348623157e+308
// Number.MIN_VALUE;  // 5e-324
// Number.MAX_SAFE_INTEGER; // 9007199254740991

// 3. BigInt
// javascript

// // Created by appending 'n'
// const big = 9007199254740991n;

// // Operations
// big + 1n;        // 9007199254740992n
// big * 2n;        // 18014398509481982n

// // Cannot mix with regular Number
// big + 1;         // TypeError: Cannot mix BigInt and Number

// // Comparison works
// big > 9007199254740990; // true

// 4. Boolean
// javascript

// // Truthy values (evaluate to true in conditions)
// true, 1, "hello", {}, [], function() {}, Infinity

// // Falsy values (evaluate to false)
// false, 0, "", null, undefined, NaN

// // Double NOT operator (convert to boolean)
// !!"hello";  // true
// !!0;        // false
// !!"";       // false

// 5. Undefined
// javascript

// let x;           // undefined
// typeof x;        // "undefined"

// // Function returns undefined if no return
// function test() {}
// test();          // undefined

// // Accessing non-existent object property
// const obj = {};
// obj.prop;        // undefined

// // undefined is not a constant (can be assigned in older JS)
// // Always use void 0 for safe undefined check

// 6. Null
// javascript

// let y = null;
// typeof y;        // "object" (BUG - never fixed for compatibility)

// // Check for null properly
// y === null;      // true
// typeof y === "object" && y !== null; // Proper null check

// // Difference from undefined
// undefined: "variable exists but has no value"
// null:      "variable has intentional empty value"

// 7. Symbol
// javascript

// // Create unique symbols
// const sym1 = Symbol('id');
// const sym2 = Symbol('id');
// sym1 === sym2;   // false (always unique)

// // Used as object keys (hidden from enumeration)
// const obj = {
//   [sym1]: "secret",
//   name: "John"
// };
// Object.keys(obj);        // ["name"] - symbol not shown
// Object.getOwnPropertySymbols(obj); // [Symbol(id)]

// // Well-known symbols
// Symbol.iterator;  // Used for for...of loops
// Symbol.toStringTag; // Used by Object.prototype.toString()

// 8. Object (Non-Primitive)
// javascript

// // Reference behavior
// const obj1 = { name: "John" };
// const obj2 = obj1;     // References same object
// obj2.name = "Jane";
// console.log(obj1.name); // "Jane" (changed!)

// // Object equality (compares references, not content)
// {} === {};              // false
// [] === [];              // false

// // Shallow copy
// const copy = { ...obj1 };        // Spread operator
// const copy2 = Object.assign({}, obj1);

// // Deep copy (for nested objects)
// const deepCopy = JSON.parse(JSON.stringify(obj1));
// // OR (modern)
// const deepCopy2 = structuredClone(obj1);

// Shallow copy copies only the first level of an object (nested objects are still referenced), while deep copy recursively copies everything creating completely independent copies.


// Coercion

// Coercion is automatic/implicit type conversion JavaScript performs when operators are used with mismatched types.
// Types of Coercion


// var

//     Scope: Function-scoped and can "leak" out of blocks like if or for.

//     Behavior: Allows redeclaration and is hoisted with an initial value of undefined.

// let

//     Scope: Block-scoped, meaning it only exists within the nearest curly braces {}.

//     Behavior: Can be reassigned but not redeclared, making it the standard choice for variables that change.

// const

//     Scope: Block-scoped, just like let, ensuring strict boundaries.

//     Behavior: Cannot be reassigned or redeclared, providing a "constant" reference to a value or object.

// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (global or function) during the compile phase, before the code is executed.