let unknownValue: unknown = "Hello, TypeScript!";
let anyValue: any = "Hello, TypeScript!";

console.log(unknownValue.toUpperCase()); // TypeScript will give a compile-time error: because it is 
//of type unknown must be of type number or any
console.log(anyValue.toUpperCase());    // Output: "HELLO, TYPESCRIPT!"

// 2. 
let myValue: unknown = 100;  // unknown is type-safe.
console.log(myValue + 1);//TypeScript will throw a compile-time error
