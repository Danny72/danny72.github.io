---
title: 'Learning C: Chapter 5 &#8211; Loops'
author: Daniel
layout: post
permalink: /learning-c-chapter-5-loops/
categories:
  - code
tags:
  - c
  - loops
---
The format for **while** and **do while** is as follows: <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="kw1">while</span> <span class="br0">&#40;</span><span class="sy0"><</span>boolean expression<span class="sy0">></span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> <span class="co1">//code</span><br /> <span class="br0">&#125;</span><br /> <br /> <span class="kw1">do</span> <span class="br0">&#123;</span><br /> <span class="co1">//code</span><br /> <span class="br0">&#125;</span> <span class="kw1">while</span> <span class="br0">&#40;</span><span class="sy0"><</span>boolean expression<span class="sy0">></span><span class="br0">&#41;</span><span class="sy0">;</span>
  </div>
</div> For using 

**for loops** the format is: <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    declare i<span class="sy0">;</span><br /> <span class="kw1">for</span> <span class="br0">&#40;</span><span class="sy0"><</span>init i<span class="sy0">>,<</span>boolean expression<span class="sy0">>,<</span>increment<span class="sy0">></span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> <span class="co1">//code</span><br /> <span class="br0">&#125;</span>
  </div>
</div> You can&#8217;t declare the count variable in the header of the for loop, if has to be declared beforehand. When deciding whether to use a 

**for** or **while** loop, ask yourself if you know beforehand how many times you&#8217;ll need to loop for. If you do, use a **for loop**. If you don&#8217;t know, use a **while loop**. You can use the keywords **continue **and **break **to control the flow of a loop. **Continue** will skip the remaining body of code and go onto the next iteration of the loop. **Break** will break out of the loop entirely when it is called. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    i <span class="sy0">=</span> <span class="nu0"></span><span class="sy0">;</span><br /> <span class="kw1">while</span><span class="br0">&#40;</span><span class="sy0">++</span>i<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>i<span class="sy0">%</span><span class="nu19">3</span><span class="sy0">==</span><span class="nu0"></span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw1">continue</span><span class="sy0">;</span><br /> &nbsp; <span class="br0">&#125;</span><br /> &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>i <span class="sy0">></span> <span class="nu0">100</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw2">break</span><span class="sy0">;</span> &nbsp; <br /> &nbsp; <span class="br0">&#125;</span><br /> &nbsp; <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"%dn"</span><span class="sy0">,</span>i<span class="br0">&#41;</span><span class="sy0">;</span> <br /> <span class="br0">&#125;</span>
  </div>
</div> This will print out 1 to 100, skipping every 3rd number. Note the loop condition which increments i before the non-zero boolean test. I&#8217;m using 

[Big Al&#8217;s C: Standard C][1] to learn C and write these posts.

 [1]: http://www.amazon.com/Big-Als-Standard-ebook/dp/B00A4JGE0M