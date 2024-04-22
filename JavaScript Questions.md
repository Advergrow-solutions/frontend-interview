JavaScript Questions

---

Difference between var let and const.
(If not explained temporal dead zone ask below output question)
What will be the output of following code

```
console.log(i);
var i = 0;

console.log(j);
const j = 0;
```
---

What is the difference between == and === in JavaScript?

---

Explain event loop in javascript

---

What is optional chaining in javascript?

---

What is closure in javascript? If answered then ask the following Output question

```
for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 1);
}
```
---

What is event bubbling and event capturing in JavaScript?

---

What are Promises and how do they work?

---

What will be the output of following code and explain why is it the output?
What is deep copy and shallow copy in javascript?

```
const obj = {
  name: 'John',
  age: 30,
  contact: {
    email: 'john@example.com',
    phone: '1234567890'
  }
};

const obj2 = { ...obj };

obj2.contact.email = 'newemail@example.com';

console.log('Original Email:', obj.contact.email);
console.log('Shallow Copy Email:', obj2.contact.email);
```
---

What is a callback in a javascript?

---

Write a short program that compares two date objects and returns true if they are same

---

How do you check if a string starts with another string

---

Write a program in javascript that takes an array as input and returns an array that only has the unique elements from the original array.


React Questions
What is React and why would you use it instead of other similar frameworks like Angular or Vue?

What are props in React?

What are your views on using css modules that is based on more hands-on css coding approach vs something like tailwind

Can you describe what the useEffect hook does in React?

What is context in React and how is it used?

Have you heard of vite? If so what is it? What are some benifits of using vite over CRA

CSS Questions
What is the box model in CSS?

How can you center a div inside another div?

What are CSS selectors? Give examples of different types you can use.

Explain the difference between block, inline, and inline-block display properties.

If the interview went well move onto some fun javascript gotcha questions

what will be the output of following questions

let greeting;
greetign = {}; // Typo!
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined

---

'use strict';
let greeting;
greetign = {}; // Typo!
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined
D: Reference Error
E: Type Error

---

const myArr = [1+2, 3*6, 10-5];
console.log(myArr);

---

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);

A: false true false true
B: false true true true
C: true true false true
D: true true true true

---

function sayHi() {
return (() => 0)();
}

console.log(typeof sayHi());

A: "object"
B: "number"
C: "function"
D: "undefined"

---
