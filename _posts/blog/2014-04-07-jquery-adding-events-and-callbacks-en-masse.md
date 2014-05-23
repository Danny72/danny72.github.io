---
title: 'jQuery: Adding Events and Callbacks en-masse'
author: Daniel
layout: post
permalink: /jquery-adding-events-and-callbacks-en-masse/
category: blog
tags:
  - animation
  - callback
  - handler
  - javascript
  - jquery
---

Using document.querySelectorAll and jQuery selectors, we can easily assign events and closures in a single line. The standard way of doing this though, isn't always the most efficient.

### Click Handlers 

It&#8217;s standard practice to attach handlers to elements all in one go. If you have 10 divs that need a click handler, you don&#8217;t want to manually add a click event to each div. We just simply do it on a selection. 

    $("div.box").on("click",function() {
      console.log($(this).text());
    });
  
What if we have 100 divs though? We don&#8217;t really want to add 100 click handlers into the DOM. A much easier way is to take advantage of event proprogation. When an event is fired, the event first looks for a handler in it&#8217;s current branch of the DOM to handle it. If it doesn&#8217;t find one, it moves up the tree until it does. This is known as bubbling, and we can use it to replace our theoretical 100 handlers with 1. 

    $("div.content").on("click", "div.box", function() {
      console.log($(this).text());
    });
  
We just attach the click handler to the parent div, adding in an extra match argument. The match argument means that the handler will only handle events coming from elements that match the selection. For example clicking on a label would not fire the event. 

### Animation Callbacks 

What happens though when we need to add several animations to a set of elements. If we want the animations to happen concurrently, it&#8217;s trivial to do. 

    $("div.box").fadeOut("fast");

But what if we want them to happen sequentially, say have all images fade away one after another. To do this we need to provide a callback function to handle the next element is sequence. If we have 2 to 3 elements to animate, it&#8217;s possible to write it like this. 

    $("#element1").fadeOut("fast", function() {
      $("#element2").fadeOut("fast", function() {
        $("#element3").fadeOut("fast");
      });
    });

It&#8217;s pretty obvious that this isn&#8217;t practical for adding multiple animations for a large selection. A [neat solution](http://www.paulirish.com/2008/sequentially-chain-your-callbacks-in-jquery-two-ways/) is to use a function to add the animation, with a recursive call inside the callback function. This allows you to sequentially animate all of the elements in the selection, without writing a giant nested expression.   
  
    (function chain(sel) {
      sel.eq(0).animate({"opacity":0},400, function() {
          (sel = sel.slice(1)).length && chain(sel);
      });
    }($("img")));

On each function call the head of the selection is animated, and the tail is passed recursively inside the callback, if there is elements left. Note that the function is a [IIFE](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Immediately Invoked Function Expression).   
  
Although this example will fade out all images inside the document, it&#8217;s generic enough to apply to all sorts of effects you could want to do in jQuery. Here&#8217;s an example of it in action, where it will select a random element from the selection and fade it out until there&#8217;s no more elements left.   
  
<p id="fade_all">
  <a>Toggle opacity of divs in a random sequence</a>
</p>

Here&#8217;s the click handler code for animation.

    $("#fade_all").click(function(e) {
      e.preventDefault();
      var opac = +jQuery("div.toggle_opac:first").css("opacity") ? 0 : 1;
      (function chain(sel) {
          var ran = Math.floor(Math.random()*sel.length);
          sel.eq(ran).animate({"opacity":opac},50, function() {
              sel.splice(ran,1);
              if (sel.length) {
                  chain(sel);
              }
          });
      }(jQuery("div.toggle_opac")));
    });
