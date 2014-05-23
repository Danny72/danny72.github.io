---
title: Converting ranges of numbers
author: Daniel
layout: post
permalink: /converting-ranges-of-numbers/
categories:
  - maths
tags:
  - numbers
  - ranges
---
You often need to map a value from one range of numbers to another. For example, you generate a value that needs to correspond to an angle (in radians) between 0 and 2PI. There&#8217;s a pretty simple conversion to do that <div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    OldRange <span class="sy0">=</span> <span class="br0">&#40;</span>OldMax <span class="sy0">-</span> OldMin<span class="br0">&#41;</span> &nbsp;<br /> NewRange <span class="sy0">=</span> <span class="br0">&#40;</span>NewMax <span class="sy0">-</span> NewMin<span class="br0">&#41;</span> &nbsp;<br /> NewValue <span class="sy0">=</span> <span class="br0">&#40;</span><span class="br0">&#40;</span><span class="br0">&#40;</span>OldValue <span class="sy0">-</span> OldMin<span class="br0">&#41;</span> <span class="sy0">*</span> NewRange<span class="br0">&#41;</span> <span class="sy0">/</span> OldRange<span class="br0">&#41;</span> <span class="sy0">+</span> NewMin
  </div>
</div> Say I was generating values between 5 and 15 that needed translating to radians. We just substitute in the numbers to get our new value. Let&#8217;s see if 10 maps to PI. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    OldRange <span class="sy0">=</span> <span class="br0">&#40;</span><span class="nu0">15</span> <span class="sy0">-</span> <span class="nu0">5</span><span class="br0">&#41;</span> &nbsp;<br /> NewRange <span class="sy0">=</span> <span class="br0">&#40;</span>2PI <span class="sy0">-</span> <span class="nu0"></span><span class="br0">&#41;</span> &nbsp;<br /> NewValue <span class="sy0">=</span> <span class="br0">&#40;</span><span class="br0">&#40;</span><span class="br0">&#40;</span><span class="nu0">10</span> <span class="sy0">-</span> <span class="nu0">5</span><span class="br0">&#41;</span> <span class="sy0">*</span> 2PI<span class="br0">&#41;</span> <span class="sy0">/</span> <span class="nu0">10</span><span class="br0">&#41;</span> <span class="sy0">+</span> <span class="nu0"></span> <span class="sy0">=</span> PI
  </div>
</div> This will work well as long as one of the ranges isn&#8217;t very small in relation to the other.