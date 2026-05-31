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

// Part 2: Type Coercion

// Coercion is automatic/implicit type conversion JavaScript performs when operators are used with mismatched types.
// Types of Coercion
// Type	Description	Example
// Implicit	Automatic by JavaScript	"5" + 1 → "51"
// Explicit	Manual by developer	Number("5") → 5
// 1. String Coercion

// Triggered by: + operator when either operand is string, or template literals
// javascript

// // Implicit string coercion
// "5" + 1;        // "51" (number becomes string)
// "Hello" + true; // "Hellotrue"
// "Value: " + null;  // "Value: null"
// "Array: " + [1,2]; // "Array: 1,2"

// // Template literals (also coerces)
// `Value: ${42}`;     // "Value: 42"
// `Result: ${true}`;  // "Result: true"

// // Explicit string coercion
// String(123);        // "123"
// String(true);       // "true"
// String(null);       // "null"
// String(undefined);  // "undefined"
// (123).toString();   // "123"

// Coercion rules to string:
// Value	Becomes
// Number	String representation
// Boolean	"true" or "false"
// null	"null"
// undefined	"undefined"
// Object	"[object Object]" (unless custom toString)
// Array	Elements joined with commas
// 2. Number Coercion

// Triggered by: Arithmetic operators (-, *, /, %, **), comparison operators (>, <), unary +, -
// javascript

// // Implicit number coercion
// "5" - 2;        // 3 (string to number)
// "10" * "2";     // 20
// "20" / "4";     // 5
// "hello" - 1;    // NaN

// // Unary operators
// +"5";           // 5 (explicit via unary plus)
// -"10";          // -10

// // Comparison (not equality)
// "5" > 3;        // true (coerces to number)
// "10" > "2";     // false (string comparison - lexicographic!)
// // For strings, compare character by character: "1" vs "2"

// // Explicit number coercion
// Number("123");   // 123
// Number("12.5");  // 12.5
// Number("");      // 0
// Number("hello"); // NaN
// Number(true);    // 1
// Number(false);   // 0
// Number(null);    // 0
// Number(undefined); // NaN

// parseInt("123px");   // 123 (parses until non-digit)
// parseFloat("12.5em"); // 12.5

// Coercion rules to number:
// Value	Becomes
// undefined	NaN
// null	0
// true	1
// false	0
// "" (empty)	0
// " " (spaces)	0
// "123"	123
// "12.5"	12.5
// "12abc"	NaN
// [null]	0
// [1,2]	NaN
// 3. Boolean Coercion

// Triggered by: Logical operators (&&, ||, !), conditionals (if, while, for), ternary operator (? :)
// javascript

// // Truthy and Falsy values
// // FALSY values (coerce to false):
// false, 0, -0, 0n, "", null, undefined, NaN

// // EVERYTHING else is TRUTHY:
// true, 1, "hello", {}, [], function(){}, "0", "false"

// // Implicit boolean coercion
// if ("hello") {        // Truthy → executes
//   console.log("runs");
// }

// !0;                   // true (0 is falsy)
// !!"hello";           // true (double NOT: truthy)
// !!"";                // false

// // Explicit boolean coercion
// Boolean("hello");    // true
// Boolean(0);          // false
// Boolean({});         // true
// Boolean([]);         // true (empty array is truthy!)

// // Logical operators return original values (not coerced)
// const result = "hello" && 42;   // 42 (returns last truthy)
// const result2 = 0 && "hello";   // 0 (returns first falsy)
// const result3 = null || "default"; // "default"

// 4. Equality Coercion (== vs ===)

// This is the most common source of coercion confusion.
// Operator	Name	Coercion
// ===	Strict equality	NO coercion (check type AND value)
// ==	Abstract equality	YES coercion (convert types then compare)

// RULE: Always use === unless you explicitly need coercion!
// How == works (abstract equality algorithm):
// javascript

// // 1. Same type → compare directly
// "hello" == "hello";  // true
// 42 == 42;            // true

// // 2. Different types → coerce

// // Number vs String
// 5 == "5";            // true (string "5" → number 5)

// // Boolean vs Anything
// true == 1;           // true (true → 1)
// false == 0;          // true (false → 0)
// true == "1";         // true ("1" → 1, then true → 1)
// false == "";         // true ("" → 0, false → 0)

// // null vs undefined
// null == undefined;   // true (special case)
// null == 0;           // false
// undefined == false;  // false

// // Object vs Primitive
// [1,2] == "1,2";      // true (array toString = "1,2")
// [1] == 1;            // true ([1].toString = "1" → 1)
// [] == 0;             // true ([] → "" → 0)
// [] == false;         // true ([] → "" → 0, false → 0)
// {} == "[object Object]"; // true

// // NaN
// NaN == NaN;          // false (NaN is never equal to anything)
// NaN === NaN;         // false

// Common == pitfalls to avoid:
// javascript

// // These are all TRUE (often unexpected)
// 0 == false;          // true
// "" == false;         // true
// " \t\r\n" == 0;      // true (whitespace string → 0)
// null == undefined;   // true
// [1] == 1;            // true
// "0" == false;        // true
// "true" == true;      // false! ("true" string → NaN, true → 1)

// 5. Special Coercion Cases
// The + operator (string vs number coercion)
// javascript

// // When both operands are numbers → addition
// 1 + 2;               // 3

// // When any operand is string → concatenation
// 1 + "2";             // "12"
// "1" + 2;             // "12"

// // With objects
// {} + [];             // 0 (weird parsing edge case)
// [] + {};             // "[object Object]"
// [] + [];             // "" (empty string)

// // Order matters (left to right)
// 1 + 2 + "3";         // "33" (1+2=3, 3+"3"="33")
// "1" + 2 + 3;         // "123" ("1"+2="12", "12"+3="123")

// Coercion in logical operators
// javascript

// // && returns first falsy OR last truthy
// 0 && "hello";        // 0
// 1 && "hello";        // "hello"
// "a" && "b";          // "b"

// // || returns first truthy OR last falsy
// 0 || "default";      // "default"
// "hello" || "world";  // "hello"
// null || undefined;   // undefined

// // Useful patterns
// const name = userInput || "Anonymous";  // Default value
// isValid && submitForm();                 // Guard clause

// Coercion in comparisons
// javascript

// // Strings compare lexicographically (character by character)
// "10" > "2";          // false ("1" < "2")
// "10" > 2;            // true (string coerces to number)

// // Different types coerce to numbers (except for strings vs strings)
// true > false;        // true (1 > 0)
// null >= 0;           // true (null → 0)
// undefined > 0;       // false (undefined → NaN)
