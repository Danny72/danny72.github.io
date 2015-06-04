---
title: Converting Strings to Numbers in Javascript
layout: post
permalink: /converting-strings-to-numbers-in-javascript/
categories:
  - code
tags:
  - javascript
  - numbers
  - strings
---
Its very common to have to convert a string to a number. This often occurs when dealing with HTML input, as HTML only deals in strings. What's the simplest and/or fastest way to convert strings to numbers? 

### parseInt(n) 

parseInt() will take your string and try to convert it to a number. You can also specify a radix will tells the method what base the number should be in. You should always specify the base of the number, otherwise it will try to guess it (and it will usually guess wrong). 

        parseInt("0092",10)
        > 92

For most browsers, this method is known to be the fastest way of converting a string. 

### Number(n) 

Number() works in the same way as parseInt(), but is slower and doesn't allow a radix parameter. It should be avoided. 

### Unary Operators 

You can also use unary operators to force type coercion of strings to numbers. 

        +"0023"
        > 23
        +"0xFF"
        > 255

Although not as quick as parseInt(), it's very quick and readable.
