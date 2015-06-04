---
title: Creating Functions in a Loop and Closure
layout: post
permalink: /creating-functions-in-a-loop-and-closure/
category: blog
tags:
  - closure
  - javascript
  - loop
---
JSLint will throw up the message **&#8220;Don&#8217;t make functions within a loop&#8221;** when it encounters a function statement or expression inside a loop. This often comes up when assigning click handlers to elements. You need to give the element a function for the click event. But if you try to do this inside a loop, JSLint will moan at you. But why is JSLint complaining. Let&#8217;s see what happens if we try this. Lets create 5 buttons inside a loop that print to the console the index number they were created with. 

    var i, el;
    for (i = 0; i < 5; i++) {
      el = document.createElement('input');
      el.setAttribute("type","button");
      el.setAttribute("value",i);
      el.addEventListener("click", function() { 
        console.log("index is " + i); 
      });
      $("head").after(el);
    }

If we click the buttons in order, we get this printed to the console. 

    index is 5
    index is 5
    index is 5
    index is 5
    index is 5

### What&#8217;s going on?

We&#8217;re getting closure issues with the function assigned to the click handler. This is because a function always has access to the context in which it was created, in this case the variables i and el. This is known as a closure. Any variables that are used inside a function&#8217;s scope, but where declared up the scope scope chain, are known as free variables. In this case the index variable i is free as it wasn&#8217;t declared inside the function&#8217;s scope. The reason we get the click function printing &#8220;5&#8243; is because the value of the free variable isn&#8217;t bound when the function is created. It only gets bound when the click handler is fired, when the loop has long since finished. Obviously with the loop having stopped, it&#8217;s value will be what we set it to loop until. In this case it&#8217;s &#8220;5&#8243;. 

### How do we fix it?

We need to create a local variable to capture the correct value of i. The cleanest way to do this is to use a create handler function that takes the i as an argument, and returns a function for the click event. 

    function make_click_handler(i) {
      return function() {
          console.log("index is " + i);
      };
    }
           
    var i, el;
    for (i = 0; i < 5; i++) {
      el = document.createElement('input');
      el.setAttribute("type","button");
      el.setAttribute("value",i);
      el.addEventListener("click", make_click_handler(i));
      $("head").after(el);
    }
