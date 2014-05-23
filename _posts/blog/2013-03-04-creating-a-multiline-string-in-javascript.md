---
title: Creating a multiline string in Javascript
author: Daniel
layout: post
permalink: /creating-a-multiline-string-in-javascript/
categories:
  - code
tags:
  - javascript
  - strings
---
When writing Java script, you can&#8217;t create a mutli line string using triple quotes or HERE document syntax. It&#8217;s often quite useful though to be able to do so, for injecting HTML code and whatnot. You have to therefore use some hacky tricks to do it. If you want to create a multi line string for inserting HTML into a webpage, you can use the **backslash** character to escape the newline. This allows you to create an easy to read and formatted HTML string. <div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    $<span class="br0">&#40;</span><span class="st0">"body"</span><span class="br0">&#41;</span>.<span class="me1">append</span><span class="br0">&#40;</span><span class="st0">"<div> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <h1>Heading</h1> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <p> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href='www.example.com'>Example</a> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"</span><span class="br0">&#41;</span><span class="sy0">;</span>
  </div>
</div> If you&#8217;re just writing some code, and need to create a long string over multiple lines, you can use string concatenation to do it. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">var</span> my_string <span class="sy0">=</span> <span class="st0">"this is a long test string for"</span> <span class="sy0">+</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="st0">"showing how to use concatenation"</span><span class="sy0">;</span>
  </div>
</div>