---
layout: post
title: "Reverse a String in Javascript"
category: "blog"
permalink: "reverse-a-string-in-javascript"
tags: ["javascript","strings"]
---

A common homework assignment/interview question is asking someone write function to reverse a string. As there's no native method to do this unlike other languages, it often comes up. There's several ways to implement this function, so let's look at some of them.

###Creating a new string with for-loop

The immediately obvious way is to use a for loop to loop backwards through each char of the string, appending each character to a new string.

    function reverse_string(input) {
      var res = "";
      for (var i=input.length-1; i>0; i--) {
        res += input[i];
      }
      return res;
    }

This is a standard C style way to reverse a string. Are there anymore interesting ways to reverse a string?

###Using Array.Prototype

A common way of reversing a string found on the web is using the Array prototype to do the work for you.

    function string_reverse(input) {
        return input.split('').reverse().join('');
    }

This function splits the characters of the string into an array, reverses the contents of the array, and then joins them back into a string. Although it's quite succinct, it's quite slow performance wise and will fail on certain unicode characters.


