---
title: 'Javascript tricks: Fun with booleans'
author: Daniel
layout: post
permalink: /javascript-tricks-operator/
categories:
  - code
tags:
  - booleans
  - javascript
  - negation
---
We usually just use boolean variables for control flow inside our programs. But we can also create booleans on the fly from other types, and use logical operators on them. This is because all types in Javascript will evaluate to either &#8220;truthy&#8221; or &#8220;falsey&#8221; values. Most types will evaluate as truthy, but a few key types will evaluate to falsey. These are **false**, **null**, **undefined**, **NaN**, **the empty string** and ****. 
### Logical Negation The negation operator (!) will simply negate the current value, so true becomes false and vice-versa. We can use this on types to produce booleans. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">></span> <span class="sy0">!</span><span class="nu0"></span><br /> <span class="kw2">true</span><br /> <br /> <span class="sy0">></span> <span class="sy0">!</span><span class="kw2">null</span><br /> <span class="kw2">true</span><br /> <br /> <span class="co1">//double negation</span><br /> <br /> <span class="sy0">></span> <span class="sy0">!!</span><span class="nu0"></span><br /> <span class="kw2">false</span><br /> <br /> <span class="sy0">></span> <span class="sy0">!!</span>NaN<br /> <span class="kw2">false</span>
  </div>
</div> Because we know that 1 will be truthy and 0 will be falsey, we can evaluate statements down to a boolean. For instance, if we wanted to know if an integer x is even. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw1">if</span> <span class="br0">&#40;</span><span class="sy0">!</span><span class="br0">&#40;</span>x<span class="sy0">%</span>2<span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="kw3">alert</span><span class="br0">&#40;</span><span class="st0">"even"</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span><br /> <br /> <span class="kw1">if</span> <span class="br0">&#40;</span><span class="sy0">!!</span><span class="br0">&#40;</span>x<span class="sy0">%</span>2<span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="kw3">alert</span><span class="br0">&#40;</span><span class="st0">"odd"</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div>

### Logical OR We can also use logical OR ( | | ) on types. This way we don&#8217;t just have to return true or false. The most common usage is making a complex return statement. We can return the value if true, but false if not. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">></span> <span class="kw2">function</span> get_ext<span class="br0">&#40;</span>i<span class="br0">&#41;</span> <span class="br0">&#123;</span> <span class="kw1">return</span> i.<span class="me1">split</span><span class="br0">&#40;</span><span class="st0">'.'</span><span class="br0">&#41;</span>.<span class="me1">slice</span><span class="br0">&#40;</span><span class="nu0">1</span><span class="br0">&#41;</span>.<span class="me1">pop</span><span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="sy0">||</span> <span class="kw2">false</span><span class="sy0">;</span> <span class="br0">&#125;</span><br /> <span class="sy0">></span> get_ext<span class="br0">&#40;</span><span class="st0">"foo.bar"</span><span class="br0">&#41;</span><br /> bar<br /> <span class="sy0">></span> get_ext<span class="br0">&#40;</span><span class="st0">"foobar"</span><span class="br0">&#41;</span><br /> <span class="kw2">false</span>
  </div>
</div>