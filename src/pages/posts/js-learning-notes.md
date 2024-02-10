---
layout: "./../../layouts/post.layout.astro"
title: "JavaScript Learning Notes"
date: "2024-02-10 22:03:00"
description: "Navigate the dynamic world of JavaScript with essential learning notes. Explore notable links for comprehensive documentation and tutorials from Mozilla Developer Network and W3 Schools. Dive into the intricacies of variable scopes and declarations, uncover the nuances of strict mode, and enhance your coding style with effective naming conventions. Elevate your JavaScript skills with best practices, performance tips, and avoidance of common mistakes. Master the language's intricacies and optimize your coding journey."
keywords: "JavaScript Learning, JavaScript Syntax, JavaScript Links, JavaScript Notable Links, JavaScript Scope, JavaScript Strict Mode, JavaScript Style Guide, JavaScript Naming Conventions, JavaScript Performance, JavaScript Best Practices, JavaScript Mistakes, JavaScript Tips, W3 Schools JavaScript, Mozilla Developer Network, Dav/Devs Tech Blog, Web Development, Frontend Development."
images:
  [{ url: "js-learning-notes-0001.png", alt: "JavaScript Learning Notes" }]
---

## 1. Notable Links

| Website                                              | Link                                                    |
| ---------------------------------------------------- | ------------------------------------------------------- |
| Mozilla Developer Network (JavaScript Documentation) | https://developer.mozilla.org/en-US/docs/Web/JavaScript |
| W3 Schools (JavaScript Tutorials)                    | http://www.w3schools.com/js/default.asp                 |
| W3 Schools (Style Guide)                             | http://www.w3schools.com/js/js_conventions.asp          |
| W3 Schools (Best Practices)                          | http://www.w3schools.com/js/js_best_practices.asp       |
| W3 Schools (Mistakes)                                | http://www.w3schools.com/js/js_mistakes.asp             |

## 2. Take Note

All variables in JavaScript are public by default.

```js
function Person(first, last, age, birthDate, race, religion) {
  // public
  this.firstName = first
  this.lastName = last
  this.age = age
  this.birthDate = birthDate

  this.fullName = function () {
    console.log(this.firstName + " " + this.lastName)
  }

  // private
  var race = race
  var religion = religion

  var hasReligion = function () {
    if (religion.toLowerCase() !== "secular") {
      return false
    } else {
      return true
    }
  }
}
```

## 3. Strict Mode

Link: http://www.w3schools.com/js/js_strict.asp

`"use strict";` Defines that JavaScript code should be executed in "strict mode".

### 3.1 The "use strict" Directive

The "use strict" directive is new in JavaScript 1.8.5 (ECMAScript version 5).<br>
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.<br>
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".<br>
With strict mode, you can not, for example, use undeclared variables.

> Strict mode is supported in:<br>
> Internet Explorer from version 10. Firefox from version 4.<br>
> Chrome from version 13. Safari from version 5.1. Opera from version 12.

### 3.2 Declaring Strict Mode

Strict mode is declared by adding "use strict"; to the beginning of a JavaScript file, or a JavaScript function.
Declared at the beginning of a JavaScript file, it has global scope (all code will execute in strict mode):

Examples:

```js
"use strict"
x = 3.14 // This will cause an error
```

```js
"use strict"
myFunction()

function myFunction() {
  y = 3.14 // This will also cause an error
}
```

Declared inside a function, it has local scope (only the code inside the function is in strict mode):

```js
x = 3.14 // This will not cause an error.
myFunction()

function myFunction() {
  "use strict"
  y = 3.14 // This will cause an error
}
```

### 3.3 The "use strict"; Syntax

The syntax, for declaring strict mode, was designed to be compatible with older versions of JavaScript.<br>
Compiling a numeric literal (4 + 5;) or a string literal ("John Doe";) in a JavaScript program has no side effects. It simply compiles to a non existing variable and dies.<br>
So "use strict"; only matters to new compilers that "understand" the meaning of it.

## 4. Style Guide

Link: http://www.w3schools.com/js/js_conventions.asp

### 4.1 Naming Conventions

Always use the same naming convention for all your code. For example:

- Variable and function names written as `camelCase`
- Global variable written in `UPPERCASE`
- Constants (like PI) written in `UPPERCASE`

Should you use `hyp-hens`, `camelCase`, or `under_scores` in variable names?<br>
This is a question programmers often discuss. The answer depends on who you ask:

_Hyphens in HTML and CSS:_

HTML5 attributes can start with data- (data-quantity, data-price).<br>
CSS uses hyphens in property-names (font-size).

> Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.

_Underscores:_

Many programmers prefer to use underscores (date_of_birth), especially in SQL databases.<br>
Underscores are often used in PHP documentation.

_PascalCase:_

PascalCase is often preferred by C programmers.

_camelCase:_

camelCase is used by JavaScript itself, by jQuery, and other JavaScript libraries.

> Don't start names with a $ sign. It will put you in conflict with many JavaScript library names.

### 4.2 Performance

Coding conventions are not used by computers. Most rules have little impact on the execution of programs.

Indentation and extra spaces are not significant in small scripts.

For code in development, readability should be preferred. Larger production scripts should be minified.

## 5. Best Practices

Link: http://www.w3schools.com/js/js_best_practices.asp

### 5.1 Don't Use new `Object()`

- Use `{}` instead of `new Object()`
- Use `""` instead of `new String()`
- Use `0` instead of `new Number()`
- Use `false` instead of `new Boolean()`
- Use `[]` instead of `new Array()`
- Use `/()/` instead of `new RegExp()`
- Use `function (){}` instead of `new function()`

Example:

```js
var x1 = {} // new object
var x2 = "" // new primitive string
var x3 = 0 // new primitive number
var x4 = false // new primitive boolean
var x5 = [] // new array object
var x6 = /()/ // new regexp object
var x7 = function () {} // new function object
```
