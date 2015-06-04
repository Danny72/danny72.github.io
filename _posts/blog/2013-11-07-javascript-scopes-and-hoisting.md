---
title: Javascript Scopes and Hoisting
layout: post
permalink: /javascript-scopes-and-hoisting/
categories:
  - code
tags:
  - hoisting
  - javascript
  - scope
---
Scope in Javascript is slightly different to other languages. Most languages use block level scope, where creating a new block i.e. an IF statement creates a new scope for variables. Javascript instead uses Function level scoping. A new scope is only created inside a function declaration. 

### Global Variables

Any variable not declared inside a function is inside the window scope, and therefore a global variable. Also if you're not using Javascript in strict mode, any variable that is declared without the 'var' keyword is implicitly set as a global variable. 

        function bar() {
            baz = "global";  //implicit global
        }

To enable strict mode, just add this to the top of the script before anything else: 

        "use strict";

### Function Scope

All variables created inside the function are included in that function's scope. These include any parameters passed to the function. Function scope means that constructs like If statements and loops won't create a new scope unlike most other languages. 

        function foo() {  //everything is in the same scope
           
            var x = 1;
            console.log(x);
           
            if (x) {
                var x = 2;
                console.log(x);
            }  
            console.log(x);
        }

        foo(); //will print 1, 2, 2

If we want to create a new scope for the code inside the If statement, we can enclose it inside a self executing anonymous function. 

        function foo() {
           
            var x = 1;
            console.log(x);
           
            if (x) {
                (function() {      //new scope created
                    var x = 2;
                    console.log(x);
                }());
            }
            console.log(x);
        }

        foo(); //will print 1, 2, 1

This time the var x = 2 statement is inside a new scope, so the last console.log statement is printing the value of x from the scope of the parent function. 

### Hoisting

In Javascript, variable declarations are &#8220;hoisted&#8221; (moved) to the top of their scope by the interpreter. Only the declaration is moved though and not the assignment. 

        function foo() {
            bar();
            x = 10;
        }

will become:

        function foo() {
            var x;
            bar();
            x = 10;
        }

The same is true for functions. A function declaration is hoisted in full to the top of the scope. A function expression though will only have the variable name hoisted and not the body. 

        foo(); //will run
        bar(); //throw Type error as bar hasn't been assigned yet                      
        function foo() {
            console.log("function foo");  //everything hoisted
        }
        var bar = function() {
            console.log("function bar");  //just var bar is hoisted
        }

### Avoiding hoisting issues 

To avoid issues related to hoisting and variable conflicts it creates, it's best practice to only use one variable declaration statement per scope. This can be enforced using a tool like JSLint. This means the Javascript interpreter won't move any variable declarations unseen. 

        function foo() {
            var x, y, bar;    //all declarations at top of the scope
            x = 10;
            if (x) {
                y = 20;
                bar = function() { console.log("bar"); }
            }
            console.log(x);
        }

