---
title: Javascript Scopes and Hoisting
author: Daniel
layout: post
permalink: /javascript-scopes-and-hoisting/
categories:
  - code
tags:
  - hoisting
  - javascript
  - scope
---
Scope in Javascript is slightly different to other languages. Most languages use block level scope, where creating a new block i.e. an IF statement creates a new scope for variables. Javascript instead uses Function level scoping. A new scope is only created inside a function declaration. 
### Global Variables Any variable not declared inside a function is inside the window scope, and therefore a global variable. Also if you&#8217;re not using Javascript in strict mode, any variable that is declared without the &#8220;var&#8221; keyword is implicitly set as a global variable. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">function</span> bar<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; baz <span class="sy0">=</span> <span class="st0">"global"</span><span class="sy0">;</span> &nbsp;<span class="co1">//implicit global</span><br /> <span class="br0">&#125;</span>
  </div>
</div> To enable strict mode, just add this to the top of the script before anything else: 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="st0">"use strict"</span><span class="sy0">;</span>
  </div>
</div>

### Function Scope All variables created inside the function are included in that function&#8217;s scope. These include any parameters passed to the function. Function scope means that constructs like If statements and loops won&#8217;t create a new scope unlike most other languages. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">function</span> foo<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span> &nbsp;<span class="co1">//everything is in the same scope</span><br /> &nbsp; &nbsp; <br /> &nbsp; &nbsp; <span class="kw2">var</span> x <span class="sy0">=</span> <span class="nu0">1</span><span class="sy0">;</span><br /> &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>x<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw2">var</span> x <span class="sy0">=</span> <span class="nu0">2</span><span class="sy0">;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span> <br /> &nbsp; &nbsp; <span class="br0">&#125;</span> &nbsp; <br /> &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span><br /> <br /> foo<span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span> <span class="co1">//will print 1, 2, 2</span>
  </div>
</div> If we want to create a new scope for the code inside the If statement, we can enclose it inside a self executing anonymous function. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">function</span> foo<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <br /> &nbsp; &nbsp; <span class="kw2">var</span> x <span class="sy0">=</span> <span class="nu0">1</span><span class="sy0">;</span><br /> &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>x<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#40;</span><span class="kw2">function</span><span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span> &nbsp; &nbsp; &nbsp;<span class="co1">//new scope created</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw2">var</span> x <span class="sy0">=</span> <span class="nu0">2</span><span class="sy0">;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="br0">&#41;</span><span class="sy0">;</span> <br /> &nbsp; &nbsp; <span class="br0">&#125;</span><br /> &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span><br /> <br /> foo<span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span> <span class="co1">//will print 1, 2, 1</span>
  </div>
</div> This time the var x = 2 statement is inside a new scope, so the last console.log statement is printing the value of x from the scope of the parent function. 

### Hoisting In Javascript, variable declarations are &#8220;hoisted&#8221; (moved) to the top of their scope by the interpreter. Only the declaration is moved though and not the assignment. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">function</span> foo<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; bar<span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; x <span class="sy0">=</span> <span class="nu0">10</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div> will become: 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">function</span> foo<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw2">var</span> x<span class="sy0">;</span><br /> &nbsp; &nbsp; bar<span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; x <span class="sy0">=</span> <span class="nu0">10</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div> The same is true for functions. A function declaration is hoisted in full to the top of the scope. A function expression though will only have the variable name hoisted and not the body. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    foo<span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span> <span class="co1">//will run</span><br /> bar<span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span> <span class="co1">//throw Type error as bar hasn't been assigned yet &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><br /> <span class="kw2">function</span> foo<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span><span class="st0">"function foo"</span><span class="br0">&#41;</span><span class="sy0">;</span> &nbsp;<span class="co1">//everything hoisted</span><br /> <span class="br0">&#125;</span><br /> <span class="kw2">var</span> bar <span class="sy0">=</span> <span class="kw2">function</span><span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span><span class="st0">"function bar"</span><span class="br0">&#41;</span><span class="sy0">;</span> &nbsp;<span class="co1">//just var bar is hoisted</span><br /> <span class="br0">&#125;</span>
  </div>
</div>

### Avoiding hoisting issues To avoid issues related to hoisting and variable conflicts it creates, it&#8217;s best practice to only use one variable declaration statement per scope. This can be enforced using a tool like JSLint. This means the Javascript interpreter won&#8217;t move any variable declarations unseen. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">function</span> foo<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw2">var</span> x<span class="sy0">,</span> y<span class="sy0">,</span> bar<span class="sy0">;</span> &nbsp; &nbsp;<span class="co1">//all declarations at top of the scope</span><br /> &nbsp; &nbsp; x <span class="sy0">=</span> <span class="nu0">10</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>x<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; y <span class="sy0">=</span> <span class="nu0">20</span><span class="sy0">;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; bar <span class="sy0">=</span> <span class="kw2">function</span><span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span> console.<span class="me1">log</span><span class="br0">&#40;</span><span class="st0">"bar"</span><span class="br0">&#41;</span><span class="sy0">;</span> <span class="br0">&#125;</span><br /> &nbsp; &nbsp; <span class="br0">&#125;</span><br /> &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div>