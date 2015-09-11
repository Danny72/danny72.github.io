---
title: Javascript Array Methods
layout: post
permalink: /javascript-array-methods/
categories:
  - code
tags:
  - arrays
  - javascript
---
Just detailing some useful methods for Arrays in Javascript. Although these methods are used in Javascript, similar methods are found in other languages. 

###Array.join

Just returns the contents of the array, joined up as a String. If you don&#8217;t supply a separator parameter to join(), the elements will be concatenated with a comma separator. 

    ["j","a","v","a","s","c","r","i","p","t"].join("")
    > 'javascript'

    [1,2,3].join()
    > '1,2,3'

###Array.forEach

This method takes a callback function, and will run it on every element in the array. Useful for printing the contents of the array. 

    ["a","b","c"].forEach(function(e) {
       console.log(e);
    })
    a
    b
    c

You can also pass the index and reference to the array being traversed inside the callback function. 

    ["a","b","c"].forEach(function(e,i) {
       console.log(i+1 + ": " + e);
    })
    1: a
    2: b
    3: c

###Array.map

The map method takes an callback function which is called on every element in the array. The value returned by the callback function is mapped onto the element currently being iterated on. For example, we have an array of numbers, and we want to add 10 to each element. 

    [1.34,5,19,5.5].map(function(e) {
       return e + 10;
    })
    > [ 11.34, 15, 29, 15.5 ]

You can use built in functions of Javascript as the callback function as well. 

    [64,36,9,81].map(Math.sqrt)
    > [ 8, 6, 3, 9 ]

If your'e passing a reference to an existing function as your callback, you don't specify any parameters as you don't want to call it. Note: map doesn't alter the underlying array in any way. You have to pass the resulting array to a variable. 

###Array.filter

This method will filter the array based on the callback function you pass to it. The callback function will take each element of the array and return either true or false. Any elements that return true, will be kept, everything else will be discarded. For example, this will filter the array so that it only contains elements that are 10 or greater. I've passed in an anonymous callback function, but you can declare a named function and use it as well. 

    [12, 5, 8, 130, 44].filter(function(e) {  
      return e > 9 ? true : false;
    })
    > [ 12, 130, 44 ]

###Array.reduce

This is a relatively new addition to Javascript, but a very powerful one. When applied to an array, it will reduce it down to a single value, based on the results of the callback function. The callback function takes 4 arguments. The previous value, the current value, the array index and the array itself. The previous value and the current value arguments are the important ones. The callback function will do something and return either the previous value or the current value. The previous value argument works as an accumulator. Whatever value is returned by the callback function, that is stored as the previous value argument for the next index. Therefore you could use it to add up the values of all the elements in an array, or simply select the element which meets some condition. 

####Summing the elements of an array

    [12, 5, 8, 130, 44].reduce(function(prev,cur) {  
      return prev += cur;
    })
    > 199

####Summing the elements of an array with an initial value

    [12, 5, 8, 130, 44].reduce(function(prev,cur) {  
      return prev += cur;
    },10)
    > 209

####Reducing an array to it’s largest value

    [12, 5, 8, 130, 44].reduce(function(prev,cur) {  
      return prev >= cur ? prev : cur;
    })
    > 130

The first iteration will map previous value to index 0 and current value to index 1. You can pass an initial value to the reduce method (not the callback!), which will map to previous value for the first iteration. In this case current value will be mapped to index 0. 

