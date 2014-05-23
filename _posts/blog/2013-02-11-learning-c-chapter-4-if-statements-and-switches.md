---
title: 'Learning C: Chapter 4 &#8211; if statements and switches'
author: Daniel
layout: post
permalink: /learning-c-chapter-4-if-statements-and-switches/
categories:
  - code
tags:
  - c
  - if
  - switch
---
In C an **if statement** is as follows. Note: C does not have a built in **elseif** keyword, so if statements are just chained together for the same effect. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="kw1">if</span><span class="br0">&#40;</span><span class="sy0"><</span>boolean expression<span class="sy0">></span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="co1">//code</span><br /> <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="kw1">if</span> <span class="br0">&#40;</span><span class="sy0"><</span>boolean expression<span class="sy0">></span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="co1">//code</span><br /> <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="co1">//code</span><br /> <span class="br0">&#125;</span>
  </div>
</div> C does not have a built in 

**boolean** type, instead using integers. By convention, **0 is false** and any other number is **true**. Comparison operators will return 0 or 1 for false and true respectively. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="kw4">int</span> <span class="kw2">true</span> <span class="sy0">=</span> <span class="nu0">1</span><span class="sy0">;</span><br /> <span class="kw4">int</span> <span class="kw2">false</span> <span class="sy0">=</span> <span class="nu0"></span><span class="sy0">;</span><br /> <br /> <span class="kw1">if</span><span class="br0">&#40;</span><span class="kw2">true</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"%d is truen"</span><span class="sy0">,</span> <span class="kw2">true</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span><br /> <br /> <span class="kw1">if</span><span class="br0">&#40;</span><span class="kw2">false</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"%d is never printedn"</span><span class="sy0">,</span> <span class="kw2">false</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span><br /> <br /> <span class="kw1">if</span><span class="br0">&#40;</span>true<span class="sy0">></span><span class="kw2">false</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"1 is greater than 0"</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div> You can use different types for comparison in C. Lower precision types will be automatically converted up to a more precise type for the comparison. 

<div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="kw4">char</span> char1 <span class="sy0">=</span> <span class="st0">'A'</span><span class="sy0">;</span><br /> <span class="kw4">int</span> num1 <span class="sy0">=</span> <span class="nu0">7</span><span class="sy0">;</span><br /> <br /> <span class="kw1">if</span><span class="br0">&#40;</span>char1 <span class="sy0">></span> num1<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"%c is greater than %dn"</span><span class="sy0">,</span> char1<span class="sy0">,</span> num1<span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"because %d is > %dn"</span><span class="sy0">,</span> char1<span class="sy0">,</span> num1<span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div> will output 

<div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    A is greater than <span class="nu0">7</span><br /> because <span class="nu0">65</span> is <span class="sy0">></span> <span class="nu0">7</span>
  </div>
</div> A 

**switch statement** in C is formatted as follows. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="kw4">int</span> val <span class="sy0">=</span> <span class="nu0">3</span><span class="sy0">;</span><br /> <br /> <span class="kw1">switch</span><span class="br0">&#40;</span>val<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="kw1">case</span> <span class="nu0">1</span><span class="sy0">:</span><br /> &nbsp; &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"val is 1"</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="kw2">break</span><span class="sy0">;</span><br /> &nbsp; <span class="kw1">case</span> <span class="nu0">2</span><span class="sy0">:</span><br /> &nbsp; &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"val is 2"</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="kw2">break</span><span class="sy0">;</span><br /> &nbsp; <span class="kw1">case</span> <span class="nu0">3</span><span class="sy0">:</span><br /> &nbsp; &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"val is 3"</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="kw2">break</span><span class="sy0">;</span> <br /> &nbsp; <span class="kw1">default</span><span class="sy0">:</span><br /> &nbsp; &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"not in range 1-3"</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="kw2">break</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div> You must use the break statement to exit the switch, or else C will continue on down the case statements, and hit the default case. You don&#8217;t need a default case, but if none of the cases match, then no statements will be executed. I&#8217;m using 

[Big Al&#8217;s C: Standard C][1] to learn C and write these posts.

 [1]: http://www.amazon.com/Big-Als-Standard-ebook/dp/B00A4JGE0M