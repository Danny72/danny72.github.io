---
title: Ruby loops and Enumerables
author: Daniel
layout: post
permalink: /ruby-loops-and-enumerables/
categories:
  - code
tags:
  - enumerables
  - loops
  - ruby
---
To perform a simple loop over a data collection in ruby, we can use the **each** method. <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="br0">&#91;</span><span class="st0">"banana"</span>,<span class="st0">"lemon"</span>,<span class="st0">"mango"</span><span class="br0">&#93;</span>.<span class="me1">each</span> <span class="kw1">do</span> <span class="sy0">|</span>x<span class="sy0">|</span><br /> <span class="kw3">puts</span> x<br /> <span class="kw1">end</span>
  </div>
</div> If you want the index as well as the element, we can use the 

**each\_with\_index** method. This will print just the even numbered elements in the array. <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="br0">&#91;</span><span class="st0">"banana"</span>,<span class="st0">"lemon"</span>,<span class="st0">"mango"</span><span class="br0">&#93;</span>.<span class="me1">each_with_index</span> <span class="kw1">do</span> <span class="sy0">|</span>x,i<span class="sy0">|</span><br /> <span class="kw3">puts</span> x <span class="kw1">if</span> i<span class="sy0">%</span>2==<span class="nu0">1</span><br /> <span class="kw1">end</span>
  </div>
</div> To manipulate the contents of an array, we use the 

**map** method. This will modify the contents of the array and return a new array. <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="br0">&#91;</span><span class="st0">"banana"</span>,<span class="st0">"lemon"</span>,<span class="st0">"mango"</span><span class="br0">&#93;</span>.<span class="me1">map</span> <span class="kw1">do</span> <span class="sy0">|</span>x<span class="sy0">|</span><br /> &nbsp; <span class="st0">"fresh "</span> <span class="sy0">+</span> x<br /> <span class="kw1">end</span><br /> <span class="sy0">=></span> <span class="br0">&#91;</span><span class="st0">"fresh banana"</span>, <span class="st0">"fresh lemon"</span>, <span class="st0">"fresh mango"</span><span class="br0">&#93;</span>
  </div>
</div>

**map** and **each\_with\_index** can be chained together, so that you have access to the index inside the map method. <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="br0">&#91;</span><span class="st0">"banana"</span>,<span class="st0">"lemon"</span>,<span class="st0">"mango"</span><span class="br0">&#93;</span>.<span class="me1">each_with_index</span>.<span class="me1">map</span> <span class="kw1">do</span> <span class="sy0">|</span>x,i<span class="sy0">|</span><br /> &nbsp; <span class="br0">&#40;</span>i<span class="sy0">+</span><span class="nu0">1</span><span class="br0">&#41;</span>.<span class="me1">to_s</span> <span class="sy0">+</span> <span class="st0">": "</span> <span class="sy0">+</span>x<br /> <span class="kw1">end</span><br /> <span class="sy0">=></span> <span class="br0">&#91;</span><span class="st0">"1: banana"</span>, <span class="st0">"2: lemon"</span>, <span class="st0">"3: mango"</span><span class="br0">&#93;</span>
  </div>
</div> If you wish to just select elements in an array that meet a certain criteria, use the 

**select** method. The boolean expression inside the block will keep the element if true. A new array is will be returned. <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="br0">&#91;</span><span class="st0">"banana"</span>,<span class="st0">"lemon"</span>,<span class="st0">"mango"</span><span class="br0">&#93;</span>.<span class="kw3">select</span> <span class="kw1">do</span> <span class="sy0">|</span>x<span class="sy0">|</span><br /> &nbsp; x.<span class="me1">length</span> <span class="sy0"><</span>= <span class="nu0">5</span><br /> <span class="kw1">end</span><br /> <span class="sy0">=></span> <span class="br0">&#91;</span><span class="st0">"lemon"</span>, <span class="st0">"mango"</span><span class="br0">&#93;</span>
  </div>
</div> If you wish to keep a running tally of your loop, you can use the 

**inject** method. The method will return the value of sum. <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="br0">&#91;</span><span class="nu0">1</span>,<span class="nu0">2</span>,<span class="nu0">3</span>,<span class="nu0">4</span><span class="br0">&#93;</span>.<span class="me1">inject</span><span class="br0">&#40;</span><span class="nu0"></span><span class="br0">&#41;</span> <span class="kw1">do</span> <span class="sy0">|</span>sum, x<span class="sy0">|</span><br /> &nbsp; sum <span class="sy0">+</span>= x<br /> <span class="kw1">end</span><br /> <span class="sy0">=></span> <span class="nu0">10</span>
  </div>
</div>