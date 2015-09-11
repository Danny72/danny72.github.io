---
layout: post
title: "New Features in ECMASscript 6"
category: "blog"
permalink: "new-features-in-es6"
tags: ["javascript","es6"]
---

# New Features in ECMASscript 6

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

