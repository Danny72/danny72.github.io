---
title: Testing for an Array in Javascript
layout: post
permalink: /testing-for-an-array-in-javascript/
category: blog
tags:
  - arrays
  - javascript
  - prototype
---
Arrays in Javascript aren&#8217;t like arrays in other languages. They are really just objects with integers as keys. This means that Javascript won&#8217;t guarantee the order of the elements when an array is iterated over like you would expect. Javascript also (unhelpfully) doesn&#8217;t bother to distinguish between arrays and objects. 

    var test = ["bongo", "mango", "cheese"];
    var test2 = {"bongo": 1, "dingo": 2};

    typeof test;  //object
    typeof test2; //object

Before EcmaScript5, to determine if an array was an array, you had to use the toString() method of object: 

    var test, test2, isArray;

    test = ["bongo", "mango", "cheese"];
    test2 = {"bongo": 1, "dingo": 2};

    //ensure not to clobber the built-in method if it exists
    if (!Array.isArray) {
      Array.isArray = function (o) {
        return Object.prototype.toString.apply(o) === "[object Array]";
      };
    }

    Array.isArray(test);  //true
    Array.isArray(test2); //false

ECMA5 now has the Array.isArray() method baked in, so you don&#8217;t need to roll it yourself anymore.
