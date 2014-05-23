---
title: Reversing numbers using modulo
author: Daniel
layout: post
permalink: /reversing-numbers-using-modulo/
categories:
  - code
tags:
  - modulo
  - ruby
---
A really neat trick I&#8217;ve just discovered for manipulating numbers using modulo. It was used for reversing an inputted number. Say you inputted &#8217;4451289000056&#8242; and wanted to print it&#8217;s reverse. Its relatively computationally expensive to convert it to a string and reverse it. You can achieve the same result with simple arithmetic. <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    input = <span class="nu0">4451289000056</span><br /> <span class="kw3">puts</span> input<br /> <span class="kw1">while</span> input <span class="sy0">></span> <span class="nu0"></span><br /> &nbsp; <span class="kw3">print</span> input <span class="sy0">%</span> <span class="nu0">10</span><br /> &nbsp; input <span class="sy0">/</span>= <span class="nu0">10</span><br /> <span class="kw1">end</span><br /> <span class="kw3">puts</span> <span class="st0">''</span><br /> <br /> <span class="nu0">4451289000056</span><br /> <span class="nu0">6500009821544</span>
  </div>
</div> Using modulo 10, 100, 1000, &#8230; you can slice off whatever section of the number you wish.