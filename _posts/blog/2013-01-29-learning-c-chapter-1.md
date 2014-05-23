---
title: 'Learning C &#8211; Chapter 1: main and printf'
author: Daniel
layout: post
permalink: /learning-c-chapter-1/
categories:
  - code
tags:
  - c
---
To compile the c code use <div class="codecolorer-container bash railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="bash codecolorer">
    <span class="kw2">gcc</span> <span class="re5">-o</span> compiled_name source_name.c
  </div>
</div> To execute the compiled code 

<div class="codecolorer-container bash railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="bash codecolorer">
    .<span class="sy0">/</span>compiled_name
  </div>
</div> The basic C code structure 

<div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="co2">#include <stdio.h></span><br /> <br /> <span class="kw4">int</span> main<span class="br0">&#40;</span><span class="kw4">void</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="co1">//basic C source</span><br /> &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"Hello Worldn"</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; <span class="kw1">return</span><span class="br0">&#40;</span><span class="nu0"></span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div> Each source file starts with preprocessor directives &#8211; stdio.h is the standard input/output library. // is the comment syntax All statements have to end with a 

**semi-colon** **printf** is the print method. It doesn&#8217;t automatically create newlines, so they have to be added in with **n**. You can also do tabs with **t** For more complicated strings we have to use string specifiers <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="co1">//%d is for integers</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"My favourite number is %dn"</span><span class="sy0">,</span> <span class="nu0">12</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="co1">//%c is for chars</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"My favourite letter is %cn"</span><span class="sy0">,</span> <span class="st0">'d'</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="co1">//%s is for strings</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"My favourite string is %sn"</span><span class="sy0">,</span> <span class="st0">"this one"</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="co1">//%f is for floats</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"My favourite float is %fn"</span><span class="sy0">,</span> <span class="nu16">3.14</span><span class="br0">&#41;</span><span class="sy0">;</span>
  </div>
</div> In C 

**single quotes** are for chars, whilst **double quotes** are for strings. If you want to create a symbolic constant, define it at the top along with any pre-processor directives. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="co2">#include <stdio.h></span><br /> <span class="co2">#define NAME "Danny"</span><br /> <br /> <span class="kw4">int</span> main<span class="br0">&#40;</span><span class="kw4">void</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="co1">//basic C source</span><br /> &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"Hello sn"</span><span class="sy0">,</span> NAME<span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; <span class="kw1">return</span><span class="br0">&#40;</span><span class="nu0"></span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div> I&#8217;m using 

[Big Al&#8217;s C: Standard C][1] to learn C and write these blog posts.

 [1]: http://www.amazon.com/Big-Als-Standard-ebook/dp/B00A4JGE0M