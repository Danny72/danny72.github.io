---
title: Javascript For In Loop
author: Daniel
layout: post
permalink: /javascript-for-in-loop/
categories:
  - code
tags:
  - enumerable
  - javascript
  - loop
---
The For..In loop in Javascript is used to iterate over the enumerable properties of an object. The enumerable properties will be the user defined properties of the object. <div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">var</span> x <span class="sy0">=</span> <span class="br0">&#123;</span><span class="st0">"banana"</span><span class="sy0">:</span> <span class="nu0">1</span><span class="sy0">,</span> <span class="st0">"mango"</span><span class="sy0">:</span> <span class="nu0">3</span><span class="br0">&#125;</span><span class="sy0">,</span> p<span class="sy0">;</span><br /> <br /> <span class="kw1">for</span> <span class="br0">&#40;</span>p <span class="kw1">in</span> x<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>p<span class="br0">&#41;</span><span class="sy0">;</span> &nbsp;<br /> <span class="br0">&#125;</span><br /> <span class="sy0">-></span> banana<br /> &nbsp; &nbsp;mango
  </div>
</div> The only gotcha with this is if your object inherits from another prototype with defined properties. You have to manually filter them out inside the loop. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">var</span> x <span class="sy0">=</span> <span class="br0">&#123;</span><span class="st0">"banana"</span><span class="sy0">:</span> <span class="nu0">1</span><span class="sy0">,</span> <span class="st0">"mango"</span><span class="sy0">:</span> <span class="nu0">3</span><span class="br0">&#125;</span><span class="sy0">,</span> p<span class="sy0">;</span><br /> <br /> <span class="kw1">for</span> <span class="br0">&#40;</span>p <span class="kw1">in</span> x<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>x.<span class="me1">hasOwnProperty</span><span class="br0">&#40;</span>p<span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>p<span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="br0">&#125;</span><br /> <span class="br0">&#125;</span><br /> <span class="sy0">-></span> banana<br /> &nbsp; &nbsp;mango
  </div>
</div> If the x object&#8217;s prototype had attached properties, then the hasOwnProperty() method will return false. This shouldn&#8217;t be used to iterate over an array where the order of the elements is important. This is because it can&#8217;t guarantee to return them in index order as the Array is implementation dependent. The Javascript Array just extends the Object prototype and it just a bit of syntactic sugar. For arrays, use a C style for loop.