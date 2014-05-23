---
title: Alternative syntax for literals in Ruby
author: Daniel
layout: post
permalink: /alternative-syntax-for-literals-in-ruby/
categories:
  - code
tags:
  - arrays
  - literals
  - ruby
---
Ruby has built in methods for easy creation of literal strings, arrays, regex, and even shell commands. For instance if you wanted to create an array of fruits, you could use **%w** <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="sy0">%</span>w<span class="br0">&#123;</span>banana apple orange pear<span class="br0">&#125;</span>
  </div>
</div> will evaluate to 

<div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="br0">&#91;</span><span class="st0">"banana"</span>, <span class="st0">"apple"</span>, <span class="st0">"orange"</span>, <span class="st0">"pear"</span><span class="br0">&#93;</span>
  </div>
</div> Ruby doesn&#8217;t care symbol you use as your delimiter, although using parentheses allows you to use other nested parentheses inside your literal. There is also the stylistic considerations. There is also 

**%W** which allows string interpolation, similar to the difference between single and double quotes for strings. <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    fruit = <span class="st0">"mango"</span><br /> <span class="sy0">%</span>w<span class="br0">&#123;</span>banana apple orange pear <span class="co1">#{fruit}}</span><br /> <span class="sy0">=></span> <span class="br0">&#91;</span><span class="st0">"banana"</span>, <span class="st0">"apple"</span>, <span class="st0">"orange"</span>, <span class="st0">"pear"</span>, <span class="st0">"#{fruit}"</span><span class="br0">&#93;</span><br /> <span class="sy0">%</span>W<span class="br0">&#123;</span>banana apple orange pear <span class="co1">#{fruit}}</span><br /> <span class="sy0">=></span> <span class="br0">&#91;</span><span class="st0">"banana"</span>, <span class="st0">"apple"</span>, <span class="st0">"orange"</span>, <span class="st0">"pear"</span>, <span class="st0">"mango"</span><span class="br0">&#93;</span>
  </div>
</div> If you want to create an array with a multi word element, we need to use 

**%W** and string interpolation. <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="sy0">%</span>W<span class="br0">&#123;</span>banana apple orange <span class="co1">#{"passion fruit"}}</span><br /> <span class="sy0">=></span> <span class="br0">&#91;</span><span class="st0">"banana"</span>, <span class="st0">"apple"</span>, <span class="st0">"orange"</span>, <span class="st0">"passion fruit"</span><span class="br0">&#93;</span>
  </div>
</div> There are many other built in ruby methods for easy creation of literals. 

<div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="sy0">%</span>q <span class="sy0">-</span> a single quoted <span class="kw3">string</span>, no interpolation.<br /> <span class="sy0">%</span>Q <span class="sy0">-</span> a double quoted <span class="kw3">string</span>, allows interpolation.<br /> <span class="sy0">%</span>r <span class="sy0">-</span> a regular expression pattern.<br /> <span class="sy0">%</span>x <span class="sy0">-</span> a shell command
  </div>
</div>