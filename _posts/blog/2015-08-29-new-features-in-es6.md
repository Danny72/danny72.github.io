---
layout: post
title: "New Features in ECMASscript 6 - Part 1"
category: "blog"
permalink: "new-features-in-es6"
tags: ["javascript","es6"]
---

ECMAScript 6 introduces a whole host of new features into Javascript. With the final spec having been set, let's review some of the new features.

### For-Of loops

The **For-Of loop** is the new ES6 way of looping through an array. It doesn't replace **For-If** loops, as they're intended for looping over objects and were never meant to be used on arrays. The **For-Of loop** will iterate over the values of the array, not the properties/index like an **For-If** loop does.

    var fruit = ["apple","banana","cake"];

    for (let f of fruit) {
      console.log(f);
    }
    > apple
      banana
      cake
      
The main benefits of **For-Of** loops are:
* can use break, continue, return unlike in ES5 forEach loops
* avoids the problems with enumerable properties on the prototype chain 

The **For-Of** loop doesn't just work on arrays though, it will work on all array-like objects which hold data. You can use them to iterate of a NodeList from querying the DOM, and you can iterate over a String a character at a time.

    for (var x of "abc") {
        console.log(x);
    }
    > a
      b
      c

### Arrow functions

ES6 gives us new syntax for writing function espressions; the **Arrow Function** syntax.

    var fruit = ["apple","banana","melon","pear"];
    //old syntax
    fruit.filter(function(x) {
        return x.length > 4;
    });
    > ["apple", "banana", "melon"]
    //new syntax
    fruit.filter(x => x.length > 4)
    > ["apple", "banana", "melon"]
    
Theres a few points that need to be made about them though:
* if you're passing zero or multiple arguments, they need to be wrapped in parentheses
* you still need to use curly braces if the body has multiple expressions
* arrow functions can't be used as constructors, ES6 provides classes for that


    fruit.filter((x,n) => {
        var length = x.length;
        return length > 4;
    });
    > ["apple", "banana", "melon"]
    
It's not quite as beautiful as the initial example, but it's still cleaner than the old style. But the real benefit of arrow functions is **Lexical This**. The **this** keyword normally references the context in which it is called. Although the behaviour is consistent, the rules can be arcane and it's easy to make mistakes. For example, referencing **this** inside a setInterval function will bound **this** to the window object, instead of the function scope it was called in. 

    var incrementer = {
        count = 0,
        increment: function() {
            setInterval(function() {
                this.count++; //not incrementer.count
            },1000);
        }
    };
    
This code won't work as it's trying to increment a count property on the window object that doesn't exist. The standard way to fix this is to declare a variable in the parent scope to capture the value of this. But using an **arrow function**, the problem doesn't exist. The **this** keyword will always be set to the outer function the **arrow function** is defined in.

    var incrementer = {
        count = 0,
        increment: () => {
            setInterval(function() {
                this.count++;
            },1000);
        }
    };

Note: using an **arrow function** will break the common JQuery pattern when assigning event handlers to elements, as **this** won't be referring to the element that triggers the event.

    $("input").on("click", () => {
        console.log($(this).text()); //this isn't the clicked input
    });

To fix this problem, use event.currentTarget.

    $("input").on("click", e => {
        console.log($(e.currentTarget).text());
    });


### Symbols

### Generators

### Template strings

### Rest parameters and defaults 

### Destructuring

### Collections

### Proxies 

### Classes and Modules

### Let Keyword

### Subclassing

