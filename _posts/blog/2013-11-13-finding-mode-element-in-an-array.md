---
title: Finding Mode Element in an Array
layout: post
permalink: /finding-mode-element-in-an-array/
categories:
  - code
tags:
  - algorithm
  - array
  - javascript
  - mode
---
A relatively common task is to find the mode (most frequent) element in an array. This isn’t quite as easy as finding the median or the mean, and requires a bit more work. 

        function find_mode(arr) {
            var mode = {};
            var max = 0, count = 0;

            arr.forEach(function(e) {
                if (mode[e]) { mode[e]++; }
                else { mode[e] = 1; }

                if (count<mode[e]) {
                    max = e;
                    count = mode[e];
                }
            });
           
            return max;
        }

        var arr = [4,4,4,6,2,7,7,9,9];
        find_mode(arr)
        > 4

This algorithm iterates through the array, adding the elements to a hash (object in javascript). If the element hasn’t already been added to the hash, it gets added. If it already exists, than the count for that key is incremented. It then checks to see if the existing highest mode (var count) is greater than the element just processed. If it isn’t, then the count variable is changed to whatever the key for the current element is, and the max value changed to the current element. After the array has been iterated over, the value of max will be the mode, and count the frequency. As every element of the array is checked in sequence, the time complexity is 0(n). 
