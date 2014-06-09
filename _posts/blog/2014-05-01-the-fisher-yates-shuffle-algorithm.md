---
layout: post
title: "The Fisher Yates Shuffle Algorithm"
category: "blog"
permalink: "the-fisher-yates-shuffle-algorithm"
tags: ["algorithm","javascript","shuffle"]
---
The standard way to shuffle an array is the Fisher–Yates algorithm. It works by picking a random index inside the array. We can use the built in Math.random() method to generate indexes. We then swap the contents of that random index with the contents of the last index in the array. We then decrement the length of the array we scan over, so that everything with an index greater is shuffled. The process is repeated until all elements have been swapped. We are essentially picking an index at random and moving it to a new array (not an actual new array). Once all of the elements have been chosen and moved to the shuffled part of the array, we return. Implementation in Javascript

    var shuffle = function(arr) {
      var m = arr.length, t , i;
         
        while (m) {
          //generates index between 0 and arr.length - 1
          i = Math.floor(Math.random() * m--);
          //swap contents of elements
          t = arr[m];
          arr[m] = arr[i];
          arr[i] = t;
        }
        return arr;
    };

    var data = ["apple","banana","coffee","duck","egg","froyo","ginger"];
    shuffle(data);
    > [ 'egg', 'banana', 'ginger', 'froyo', 'coffee', 'apple', 'duck' ]

[http://en.wikipedia.org/wiki/Fisher-Yates_shuffle](http://en.wikipedia.org/wiki/Fisher-Yates_shuffle)
