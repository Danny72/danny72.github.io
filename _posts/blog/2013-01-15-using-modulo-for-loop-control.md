---
title: Using modulo for loop control
author: Daniel
layout: post
permalink: /using-modulo-for-loop-control/
simplecatch-sidebarlayout:
  - 
categories:
  - code
tags:
  - loops
  - modulo
  - ruby
---
The modulo operation is incredibly useful for control inside a loop. In basic terms, it will provide the remainder after we divide one number by another i.e. 9%2 = 1 as 2 goes into 9 four times, with a remainder of 1. This simple fact allows us some useful controls whilst looping over some data. For instance if you wanted to do perform different operations depending if the index was odd or even, you can use index%2 <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="kw1">if</span> index<span class="sy0">%</span>2 == <span class="nu0"></span><br /> &nbsp; even index code<br /> <span class="kw1">else</span><br /> &nbsp; odd index code<br /> <span class="kw1">end</span>
  </div>
</div> A standard flow is to perform an operation every x times the loop goes around i.e for every 10th element, write on a newline. Modulo can achieve this with very little code. Ruby also has this functionality built in with 

**each_slice** <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="kw3">array</span>.<span class="me1">each</span> <span class="kw1">do</span> <span class="sy0">|</span>x<span class="sy0">|</span><br /> &nbsp; <span class="kw1">if</span> x<span class="sy0">%</span>10 == <span class="nu0"></span><br /> &nbsp; &nbsp; write a newline<br /> &nbsp; <span class="kw1">end</span><br /> &nbsp; code dealing with element<br /> <span class="kw1">end</span>
  </div>
</div> Modulo is also useful for repeated looping over the contents of a data structure. For clarity, I&#8217;ve used a simple for loop. 

<div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="kw3">array</span> = <span class="br0">&#91;</span><span class="st0">"a"</span>,<span class="st0">"b"</span>,<span class="st0">"c"</span>,<span class="st0">"d"</span>,<span class="st0">"e"</span><span class="br0">&#93;</span><br /> <br /> <span class="kw1">for</span> i <span class="kw1">in</span> <span class="nu0"></span>..<span class="nu0">100</span><br /> &nbsp; <span class="kw3">puts</span> <span class="kw3">array</span><span class="br0">&#91;</span>i<span class="sy0">%</span><span class="kw3">array</span>.<span class="me1">length</span><span class="br0">&#93;</span><br /> <span class="kw1">end</span>
  </div>
</div> This will produce the output 

<div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    a<br /> b<br /> c<br /> d<br /> e<br /> a<br /> b<br /> c<br /> d<br /> e<br /> a<br /> .. <span class="br0">&#40;</span><span class="kw1">and</span> so on<span class="br0">&#41;</span>
  </div>
</div> This is similar to the last example (do something every 5th element), but using modulo to calculate the index of our array. When the array length divides into the index with no remainder, (5%5, 10%5, 15%5&#8230;) we get the 0 index at the start of the array. The result of the next 4 steps will be 1,2,3,4 until we hit the 0 index again and we loop round.