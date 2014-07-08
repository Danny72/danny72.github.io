---
layout: post
title: "For..Of loops and Array Comprehensions in ES6"
category: "blog"
permalink: "for-of-loops-and-array-comprehensions-in-es6"
tags: ["es6","array comprehensions","for of loop"]
---

Now that Firefox 30.0 has released with array comprehensions implemented, let's look at how to use them in Javascript. As of writing, these features haven't been implemented in Chrome. To check compatability for ES6 features use [this website](http://kangax.github.io/compat-table/es6/). 

###Using For..Of Loops

The For Of loop allows you to iterate over any objects that implement the iterable interface. This includes Arrays and new ES6 objects such as Map and Set. The syntax is as follows:

        for (variable of object) 
          statement

It has similar syntax to the old for..in loop for iterating over an object's properties. If you try to use a for..in loop over an iterable object, it will map to the indexes of the objects contents. The for..of though will map to the contents of the iterable object. 

        var fruit = ["apple","banana","cake"];

        for (let f of fruit) {
          console.log(f);
        }
        > apple
          banana
          cake

        for (let f in fruit) {
          console.log(f);
        }
        > 0
          1
          2

I'm also using let instead of var in this example. This is a new ES6 feature which allows block scoping for variables. It's not 100% supported yet, but will be in any browser that implements for..of loops.

###Array Comprehensions

The for..of loop construction allows us to use Array Comprehensions. These powerful constructs allow us to create a new array based upon an existing array. This has long been a useful feature in many different languages, probably most notably Python. The syntax is as follows:

        [for (x of iterable) x]                   //basic 
        [for (x of iterable) if (condition) x]    //filtered 
        [for (x of iterable) for (y of iterable)] //nested

In short, array comprehensions are made up of for..of loops and if statements inside an array literal.You always need at least 1 for..of loop which can then be followed by more for..of loops and if statements.

A simple example:

        [for (i of ["a","b","c"]) i.toUpperCase()]
        > Array [ "A", "B", "C" ]

Example using an if statement:

        [for (num of [4,8,15,16,23,42]) if (num > 9) num]
        > Array [ 15, 16, 23, 42 ]

An example using 2 arrays:

        var letters = ["a","b","c"];
        var numbers = [4,8,15,16,23,42];
        [for (i of letters) for (num of numbers) if (num > 23) i+num]
        > Array [ "a42", "b42", "c42" ]

Array comprehensions can also be seen as alternative syntax for the Array map and filter functions. They both will return a new array based upon an old array.

*Comparing Array.prototype.map and array comprehension*

        [1,2,3,4,5].map(function(i) {
          return i * 2;
        });
        > Array [ 2, 4, 6, 8, 10 ]

        [for (i of [1,2,3,4,5]) i * 2]
        > Array [ 2, 4, 6, 8, 10 ]

*Comparing Array.prototype.filter and array comprehension*

        [1,2,3,4,5].filter(function(i) {
          return i > 2;
        });
        > Array [ 3, 4, 5 ]

        [for (i of [1,2,3,4,5]) if (i > 2) i]
        > Array [ 3, 4, 5 ]
        
