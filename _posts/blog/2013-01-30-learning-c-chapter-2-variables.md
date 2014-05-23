---
title: 'Learning C &#8211; Chapter 2: Integers'
author: Daniel
layout: post
permalink: /learning-c-chapter-2-variables/
categories:
  - code
tags:
  - c
---
C is a **statically typed** language. This means the variable types are checked at compile time, as opposed to run time. This means we have to explicitly declare the variable type and cannot mix and match types. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="kw4">int</span> index <span class="sy0">=</span> <span class="nu0">1</span><span class="sy0">;</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"The index is %dn"</span><span class="sy0">,</span> index<span class="br0">&#41;</span><span class="sy0">;</span>
  </div>
</div> You can assign multiple variables at the same time. 

<div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="kw4">int</span> a <span class="sy0">=</span> <span class="nu0">1</span><span class="sy0">,</span> b <span class="sy0">=</span> <span class="nu0">2</span><span class="sy0">,</span> c <span class="sy0">=</span> <span class="nu0">3</span><span class="sy0">,</span> d <span class="sy0">=</span> <span class="nu0">4</span>
  </div>
</div> C uses 

**type modifiers** which allows us to modify how much storage variables take up, and the range of values they can hold. By default variables are signed, but if you don&#8217;t need negative numbers you can use an unsigned variable. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="kw4">unsigned</span> <span class="kw4">int</span> age <span class="sy0">=</span> <span class="nu0">50</span><span class="sy0">;</span> <span class="co1">//allows range 0..65536</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"This is an unsigned variable: %un"</span> age<span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="kw4">short</span> &nbsp; &nbsp;<span class="kw4">int</span> num <span class="sy0">=</span> <span class="nu0">25</span><span class="sy0">;</span> <span class="co1">//allows range -128..127</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"This is a short variable: %hdn"</span> num<span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="kw4">long</span> <span class="kw4">int</span> index <span class="sy0">=</span> <span class="nu0">4567</span><span class="sy0">;</span> <span class="co1">//allows double default size</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"This is a long variable: %ldn"</span> index<span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="kw4">long</span> <span class="kw4">long</span> x <span class="sy0">=</span> <span class="nu0">4654567</span><span class="sy0">;</span> <span class="co1">//as long as you will ever need</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"This is a long long variable: %lldn"</span> x<span class="br0">&#41;</span><span class="sy0">;</span>
  </div>
</div> You don&#8217;t actually need the int as C assumes an int when using unsigned, short or long unless specified. Note that each different type modifier has it&#8217;s own format specifier. I&#8217;m using 

[Big Al&#8217;s C: Standard C][1] to learn C and write these blog posts.

 [1]: http://www.amazon.com/Big-Als-Standard-ebook/dp/B00A4JGE0M