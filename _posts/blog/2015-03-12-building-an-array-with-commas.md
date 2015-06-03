---
layout: post
title: "Building a response with commas"
category: "blog"
permalink: "building-a-response-with-commas"
tags: ["javascript","array","strings"]
---

I often find myself writing a function that returns a string with the values seperated by a comma e.g. "orange","mango","banana". But I always write it and then think 'What's the cleanest way to add the commas?' It's an easy function to write, but to do it in a concise manner is slightly more tricky. There's a few different ways we can write this function without writing horrible code to insert the commas. We'll pass an object to the function as input.

###The Ugly Way

        function stringify(pairs){
          var output = "";
          Object.keys(pairs).forEach(function(e,i) {
            output += e + " = " + pairs[e];
            if (i !== (Object.keys(pairs).length-1)) {
              output += ",";
            }
          });
          return output;
        }

Using this way, we loop through the object and append the key/value pair to an output string. We also append a comma if we're not at the last index. This is an ugly mix of declarative and functional styles and we can do better.

###The Slice Method

        function stringify(pairs){
          var output = "";
          Object.keys(pairs).forEach(function(e,i) {
            output += e + " = " + pairs[e] + ",";
          });
          return output.slice(0,-1);
        }

This method is similar to the last one but instead of doing an ugly last index check, we always add a comma and just slice off thelast character when returning the string. A simple hack but still pretty ugly.

###The Beautiful, Functional Way

        function stringify(pairs){
          return Object.keys(pairs)
            .map(function(k) { return k + ' = ' + pairs[k] })
            .join(',');
        }

This is the ideal, functional pattern to achieve what we want. We use Object.keys as before to get an array of keys. We then use the map function to map each index of the array to a key/value pair. When then turn the array into a string with join, using a comma as the seperator. 
