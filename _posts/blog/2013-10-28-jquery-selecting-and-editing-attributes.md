---
title: 'Jquery: Selecting and Editing attributes'
author: Daniel
layout: post
permalink: /jquery-selecting-and-editing-attributes/
categories:
  - code
tags:
  - attributes
  - javascript
  - jquery
---
To select attributes using Jquery, we use the attr() method. 
### Get attribute value To get the attribute value, we have to pass the name of the attribute we want e.g. the href attribute. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">></span> $<span class="br0">&#40;</span><span class="st0">"a"</span><span class="br0">&#41;</span>.<span class="me1">attr</span><span class="br0">&#40;</span><span class="st0">"href"</span><span class="br0">&#41;</span><br /> <span class="st0">"http://www.example.org"</span>
  </div>
</div> Calling attr() on a selection with more than one element, will return the value for the first element in the selection. This behaviour holds true for all getter methods in Jquery except .text(), which returns all the text values concatenated together. 

### Set attribute value To set an attribute value, we use the attr() method again, but we pass an additional parameter which is the value we want to set. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">></span> $<span class="br0">&#40;</span><span class="st0">"a"</span><span class="br0">&#41;</span>.<span class="me1">attr</span><span class="br0">&#40;</span><span class="st0">"href"</span><span class="sy0">,</span><span class="st0">"http://www.google.com"</span><span class="br0">&#41;</span><br /> <span class="br0">&#91;</span><span class="sy0"><</span>a href<span class="sy0">=</span>​<span class="st0">"www.google.com"</span> id<span class="sy0">=</span>​<span class="st0">"back"</span><span class="sy0">></span>​<span class="kw3">Back</span>​<span class="sy0"></</span>a<span class="sy0">></span>​<span class="sy0">,</span> <br /> <span class="sy0"><</span>a href<span class="sy0">=</span>​<span class="st0">"www.google.com"</span> onclick<span class="sy0">=</span>​<span class="st0">"window.location.reload()​"</span><span class="sy0">></span>​Reload​<span class="sy0"></</span>a<span class="sy0">></span>​<span class="sy0">,</span> <br /> <span class="sy0"><</span>a href<span class="sy0">=</span>​<span class="st0">"www.google.com"</span> id<span class="sy0">=</span>​<span class="st0">"forward"</span><span class="sy0">></span>​<span class="kw3">Forward</span>​<span class="sy0"></</span>a<span class="sy0">></span>​<span class="br0">&#93;</span>
  </div>
</div> Unlike returning the value, the setter method will act on ALL elements in the selection. If you select all anchor elements from the DOM and set the &#8220;href&#8221; attribute, every link will be changed! If you wish to only change only a few elements, narrow down your selection or use the eq(i) method to select specific elements. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="co1">//select 1st <a> in DOM and change attribute</span><br /> <span class="sy0">></span> $<span class="br0">&#40;</span><span class="st0">"a"</span><span class="br0">&#41;</span>.<span class="me1">eq</span><span class="br0">&#40;</span><span class="nu0"></span><span class="br0">&#41;</span>.<span class="me1">attr</span><span class="br0">&#40;</span><span class="st0">"href"</span><span class="sy0">,</span><span class="st0">"http://www.google.com"</span><span class="br0">&#41;</span> <br /> <span class="br0">&#91;</span><span class="sy0"><</span>a href<span class="sy0">=</span>​<span class="st0">"www.google.com"</span> id<span class="sy0">=</span>​<span class="st0">"back"</span><span class="sy0">></span>​<span class="kw3">Back</span>​<span class="sy0"></</span>a<span class="sy0">></span>​<span class="br0">&#93;</span>
  </div>
</div>