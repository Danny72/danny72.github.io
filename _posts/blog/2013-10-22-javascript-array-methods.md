---
title: Javascript array methods
author: Daniel
layout: post
permalink: /javascript-array-methods/
categories:
  - code
tags:
  - arrays
  - javascript
---
Just detailing some useful methods for Arrays in Javascript. Although these methods are used in Javascript, similar methods are found in other languages. 
### Array.join Just returns the contents of the array, joined up as a String. If you don&#8217;t supply a separator parameter to join(), the elements will be concatenated with a comma separator. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="br0">&#91;</span><span class="st0">"j"</span><span class="sy0">,</span><span class="st0">"a"</span><span class="sy0">,</span><span class="st0">"v"</span><span class="sy0">,</span><span class="st0">"a"</span><span class="sy0">,</span><span class="st0">"s"</span><span class="sy0">,</span><span class="st0">"c"</span><span class="sy0">,</span><span class="st0">"r"</span><span class="sy0">,</span><span class="st0">"i"</span><span class="sy0">,</span><span class="st0">"p"</span><span class="sy0">,</span><span class="st0">"t"</span><span class="br0">&#93;</span>.<span class="me1">join</span><span class="br0">&#40;</span><span class="st0">""</span><span class="br0">&#41;</span><br /> <span class="sy0">=></span> <span class="st0">'javascript'</span><br /> <br /> <span class="br0">&#91;</span><span class="nu0">1</span><span class="sy0">,</span><span class="nu0">2</span><span class="sy0">,</span><span class="nu0">3</span><span class="br0">&#93;</span>.<span class="me1">join</span><span class="br0">&#40;</span><span class="br0">&#41;</span><br /> <span class="sy0">=></span> <span class="st0">'1,2,3'</span>
  </div>
</div>

### Array.forEach This method takes a callback function, and will run it on every element in the array. Useful for printing the contents of the array. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="br0">&#91;</span><span class="st0">"a"</span><span class="sy0">,</span><span class="st0">"b"</span><span class="sy0">,</span><span class="st0">"c"</span><span class="br0">&#93;</span>.<span class="me1">forEach</span><span class="br0">&#40;</span><span class="kw2">function</span><span class="br0">&#40;</span>e<span class="br0">&#41;</span> <span class="br0">&#123;</span> <br /> &nbsp; &nbsp;console.<span class="me1">log</span><span class="br0">&#40;</span>e<span class="br0">&#41;</span><span class="sy0">;</span> <br /> <span class="br0">&#125;</span><span class="br0">&#41;</span><br /> a<br /> b<br /> c
  </div>
</div> You can also pass the index and reference to the array being traversed inside the callback function. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="br0">&#91;</span><span class="st0">"a"</span><span class="sy0">,</span><span class="st0">"b"</span><span class="sy0">,</span><span class="st0">"c"</span><span class="br0">&#93;</span>.<span class="me1">forEach</span><span class="br0">&#40;</span><span class="kw2">function</span><span class="br0">&#40;</span>e<span class="sy0">,</span>i<span class="br0">&#41;</span> <span class="br0">&#123;</span> <br /> &nbsp; &nbsp;console.<span class="me1">log</span><span class="br0">&#40;</span>i<span class="sy0">+</span><span class="nu0">1</span> <span class="sy0">+</span> <span class="st0">": "</span> <span class="sy0">+</span> e<span class="br0">&#41;</span><span class="sy0">;</span> <br /> <span class="br0">&#125;</span><span class="br0">&#41;</span><br /> <span class="nu0">1</span><span class="sy0">:</span> a<br /> <span class="nu0">2</span><span class="sy0">:</span> b<br /> <span class="nu0">3</span><span class="sy0">:</span> c
  </div>
</div>

### Array.map The map method takes an callback function which is called on every element in the array. The value returned by the callback function is mapped onto the element currently being iterated on. For example, we have an array of numbers, and we want to add 10 to each element. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="br0">&#91;</span><span class="nu0">1.34</span><span class="sy0">,</span><span class="nu0">5</span><span class="sy0">,</span><span class="nu0">19</span><span class="sy0">,</span><span class="nu0">5.5</span><span class="br0">&#93;</span>.<span class="me1">map</span><span class="br0">&#40;</span><span class="kw2">function</span><span class="br0">&#40;</span>e<span class="br0">&#41;</span> <span class="br0">&#123;</span> <br /> &nbsp; &nbsp;<span class="kw1">return</span> e <span class="sy0">+</span> <span class="nu0">10</span><span class="sy0">;</span> <br /> <span class="br0">&#125;</span><span class="br0">&#41;</span><br /> <span class="sy0">=></span> <span class="br0">&#91;</span> <span class="nu0">11.34</span><span class="sy0">,</span> <span class="nu0">15</span><span class="sy0">,</span> <span class="nu0">29</span><span class="sy0">,</span> <span class="nu0">15.5</span> <span class="br0">&#93;</span>
  </div>
</div> You can use built in functions of Javascript as the callback function as well. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="br0">&#91;</span><span class="nu0">64</span><span class="sy0">,</span><span class="nu0">36</span><span class="sy0">,</span><span class="nu0">9</span><span class="sy0">,</span><span class="nu0">81</span><span class="br0">&#93;</span>.<span class="me1">map</span><span class="br0">&#40;</span>Math.<span class="me1">sqrt</span><span class="br0">&#41;</span><br /> <span class="sy0">=></span> <span class="br0">&#91;</span> <span class="nu0">8</span><span class="sy0">,</span> <span class="nu0">6</span><span class="sy0">,</span> <span class="nu0">3</span><span class="sy0">,</span> <span class="nu0">9</span> <span class="br0">&#93;</span>
  </div>
</div> If you&#8217;re passing a reference to an existing function as your callback, you don&#8217;t specify any parameters as you don&#8217;t want to call it. Note: map doesn&#8217;t alter the underlying array in any way. You have to pass the resulting array to a variable. 

### Array.filter This method will filter the array based on the callback function you pass to it. The callback function will take each element of the array and return either true or false. Any elements that return true, will be kept, everything else will be discarded. For example, this will filter the array so that it only contains elements that are 10 or greater. I&#8217;ve passed in an anonymous callback function, but you can declare a named function and use it as well. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="br0">&#91;</span><span class="nu0">12</span><span class="sy0">,</span> <span class="nu0">5</span><span class="sy0">,</span> <span class="nu0">8</span><span class="sy0">,</span> <span class="nu0">130</span><span class="sy0">,</span> <span class="nu0">44</span><span class="br0">&#93;</span>.<span class="me1">filter</span><span class="br0">&#40;</span><span class="kw2">function</span><span class="br0">&#40;</span>e<span class="br0">&#41;</span> <span class="br0">&#123;</span> &nbsp;<br /> &nbsp; <span class="kw1">return</span> e <span class="sy0">></span> <span class="nu0">9</span> <span class="sy0">?</span> <span class="kw2">true</span> <span class="sy0">:</span> <span class="kw2">false</span><span class="sy0">;</span> <br /> <span class="br0">&#125;</span><span class="br0">&#41;</span> <br /> <span class="sy0">=></span> <span class="br0">&#91;</span> <span class="nu0">12</span><span class="sy0">,</span> <span class="nu0">130</span><span class="sy0">,</span> <span class="nu0">44</span> <span class="br0">&#93;</span>
  </div>
</div>

### Array.reduce This is a relatively new addition to Javascript, but a very powerful one. When applied to an array, it will reduce it down to a single value, based on the results of the callback function. The callback function takes 4 arguments. The previous value, the current value, the array index and the array itself. The previous value and the current value arguments are the important ones. The callback function will do something and return either the previous value or the current value. The previous value argument works as an accumulator. Whatever value is returned by the callback function, that is stored as the previous value argument for the next index. Therefore you could use it to add up the values of all the elements in an array, or simply select the element which meets some condition. 

##### Summing the elements of an array

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="br0">&#91;</span><span class="nu0">12</span><span class="sy0">,</span> <span class="nu0">5</span><span class="sy0">,</span> <span class="nu0">8</span><span class="sy0">,</span> <span class="nu0">130</span><span class="sy0">,</span> <span class="nu0">44</span><span class="br0">&#93;</span>.<span class="me1">reduce</span><span class="br0">&#40;</span><span class="kw2">function</span><span class="br0">&#40;</span>prev<span class="sy0">,</span>cur<span class="br0">&#41;</span> <span class="br0">&#123;</span> &nbsp;<br /> &nbsp; <span class="kw1">return</span> prev <span class="sy0">+=</span> cur<span class="sy0">;</span> <br /> <span class="br0">&#125;</span><span class="br0">&#41;</span><br /> <span class="sy0">=></span> <span class="nu0">199</span>
  </div>
</div>

##### Reducing an array to it&#8217;s largest value

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="br0">&#91;</span><span class="nu0">12</span><span class="sy0">,</span> <span class="nu0">5</span><span class="sy0">,</span> <span class="nu0">8</span><span class="sy0">,</span> <span class="nu0">130</span><span class="sy0">,</span> <span class="nu0">44</span><span class="br0">&#93;</span>.<span class="me1">reduce</span><span class="br0">&#40;</span><span class="kw2">function</span><span class="br0">&#40;</span>prev<span class="sy0">,</span>cur<span class="br0">&#41;</span> <span class="br0">&#123;</span> &nbsp;<br /> &nbsp; <span class="kw1">return</span> prev <span class="sy0">>=</span> cur <span class="sy0">?</span> prev <span class="sy0">:</span> cur<span class="sy0">;</span> <br /> <span class="br0">&#125;</span><span class="br0">&#41;</span><br /> <span class="sy0">=></span> <span class="nu0">130</span>
  </div>
</div> The first iteration will map previous value to index 0 and current value to index 1. You can pass an initial value to the reduce method (not the callback!), which will map to previous value for the first iteration. In this case current value will be mapped to index 0. 

##### Summing the elements of an array with an initial value

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="br0">&#91;</span><span class="nu0">12</span><span class="sy0">,</span> <span class="nu0">5</span><span class="sy0">,</span> <span class="nu0">8</span><span class="sy0">,</span> <span class="nu0">130</span><span class="sy0">,</span> <span class="nu0">44</span><span class="br0">&#93;</span>.<span class="me1">reduce</span><span class="br0">&#40;</span><span class="kw2">function</span><span class="br0">&#40;</span>prev<span class="sy0">,</span>cur<span class="br0">&#41;</span> <span class="br0">&#123;</span> &nbsp;<br /> &nbsp; <span class="kw1">return</span> prev <span class="sy0">+=</span> cur<span class="sy0">;</span> <br /> <span class="br0">&#125;</span><span class="sy0">,</span><span class="nu0">10</span><span class="br0">&#41;</span><br /> <span class="sy0">=></span> <span class="nu0">209</span>
  </div>
</div>