---
title: For each loop in Java
author: Daniel
layout: post
permalink: /for-each-loop-in-java/
categories:
  - code
tags:
  - java
  - loops
---
There are two different ways of using the for loop in Java. There&#8217;s the old C style for loop that we all know and love. <div class="codecolorer-container java railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="java codecolorer">
    <span class="kw1">for</span> <span class="br0">&#40;</span><span class="kw4">int</span> i <span class="sy0">=</span> <span class="nu0"></span><span class="sy0">;</span> i <span class="sy0"><</span> <span class="nu0">10</span><span class="sy0">;</span> i<span class="sy0">++</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="co1">//do something here with i</span><br /> <span class="br0">&#125;</span>
  </div>
</div> There&#8217;s also a more modern loop construction, borrowed from languages such as Ruby and Python. 

<div class="codecolorer-container java railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="java codecolorer">
    <span class="kw1">for</span> <span class="br0">&#40;</span><span class="kw4">int</span> x <span class="sy0">:</span> int_array<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="co1">//do something here with x</span><br /> <span class="br0">&#125;</span>
  </div>
</div> This uses the Iterator interface inside Java to loop over the array. This eliminates all the unnecessary clutter of the C style loop, and results in much cleaner looking code. This enables you to pick up on errors quicker, as it will eliminate any off-by 1 errors and allow you to fix the underlying problem. The downside is it&#8217;s only really useful for read operations, as you can&#8217;t manipulate the array safely without using the Iterator interface directly. For more complicated operations where fine control is needed, it&#8217;s easier to stick with the C style loop.