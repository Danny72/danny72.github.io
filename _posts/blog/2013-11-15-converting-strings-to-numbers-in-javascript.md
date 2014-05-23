---
title: Converting Strings to Numbers in Javascript
author: Daniel
layout: post
permalink: /converting-strings-to-numbers-in-javascript/
categories:
  - code
tags:
  - javascript
  - numbers
  - strings
---
Its very common to have to convert a string to a number. This often occurs when dealing with HTML input, as HTML only deals in strings. What&#8217;s the simplest and/or fastest way to convert strings to numbers? 
### parseInt(n) parseInt() will take your string and try to convert it to a number. You can also specify a radix will tells the method what base the number should be in. You should always specify the base of the number, otherwise it will try to guess it (and it will usually guess wrong). 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    parseInt<span class="br0">&#40;</span><span class="st0">"0092"</span><span class="sy0">,</span><span class="nu0">10</span><span class="br0">&#41;</span><br /> <span class="sy0">=></span> <span class="nu0">92</span>
  </div>
</div> For most browsers, this method is known to be the fastest way of converting a string. 

### Number(n) Number() works in the same way as parseInt(), but is slower and doesn&#8217;t allow a radix parameter. It should be avoided. 

### Unary Operators You can also use unary operators to force type coercion of strings to numbers. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">+</span><span class="st0">"0023"</span><br /> <span class="sy0">=></span> <span class="nu0">23</span><br /> <span class="sy0">+</span><span class="st0">"0xFF"</span><br /> <span class="sy0">=></span> <span class="nu0">255</span>
  </div>
</div> Although not as quick as parseInt(), it&#8217;s very quick and readable.