---
title: Padded numbers and sprintf in Ruby
author: Daniel
layout: post
permalink: /padded-numbers-and-sprintf-in-ruby/
categories:
  - code
tags:
  - padding
  - ruby
  - sprintf
---
Sometimes you need to pad string output when printing e.g. when printing numbers in order, or printing hexadecimals. If you just use **puts** you&#8217;ll get: <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="nu0">10</span>.<span class="me1">times</span> <span class="br0">&#123;</span><span class="sy0">|</span>x<span class="sy0">|</span> <span class="kw3">puts</span> x<span class="sy0">+</span><span class="nu0">1</span> <span class="br0">&#125;</span><br /> <span class="nu0">1</span><br /> <span class="nu0">2</span><br /> <span class="nu0">3</span><br /> <span class="nu0">4</span><br /> <span class="nu0">5</span><br /> <span class="nu0">6</span><br /> <span class="nu0">7</span><br /> <span class="nu0">8</span><br /> <span class="nu0">9</span><br /> <span class="nu0">10</span>
  </div>
</div> If you wanted each index to have at least 2 digits, we need to use 

**sprintf** <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    <span class="nu0">10</span>.<span class="me1">times</span> <span class="br0">&#123;</span><span class="sy0">|</span>x<span class="sy0">|</span> <span class="kw3">puts</span> <span class="kw3">sprintf</span><span class="br0">&#40;</span><span class="st0">"%02d"</span>,x<span class="sy0">+</span><span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#125;</span><br /> 01<br /> 02<br /> 03<br /> 04<br /> 05<br /> 06<br /> 07<br /> 08<br /> 09<br /> <span class="nu0">10</span>
  </div>
</div> For more infomation on sprintf, check the 

[ruby doc][1].

 [1]: http://ruby-doc.org/core-1.9.3/Kernel.html#method-i-format "ruby docs"