---
title: Using parabolas for simple jumping
author: Daniel
layout: post
permalink: /using-parabolas-for-simple-jumping/
categories:
  - code
tags:
  - game
  - java
  - parabola
---
When needing to code jumping in a game, we can use parabolas to calculate the y of the player jumping. A parabola when plotted, is simply a mirror-symmetrical curve that forms a U shape. ![parabola][1]</img> *<p style="font-size:9px">
  <a href="http://en.wikipedia.org/wiki/Parabola">taken from wikipedia</a>
</p>* Taking the y-values from this curve at fixed intervals, allows us to produce a set of values which produces a smooth jumping arc. We first need to see if we&#8217;re actually jumping before we calculate the values for y. 

<div class="codecolorer-container java railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="java codecolorer">
    <span class="kw1">if</span> <span class="br0">&#40;</span>jumping<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw4">int</span> y_jump <span class="sy0">=</span> calc_jump<span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>y_jump <span class="sy0"><=</span> <span class="nu0"></span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; jumping <span class="sy0">=</span> <span class="kw2">false</span><span class="sy0">;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; jump_offset <span class="sy0">=</span> <span class="nu0"></span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="br0">&#125;</span><br /> &nbsp; &nbsp; <span class="kw1">else</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; jump_offset <span class="sy0">=</span> y_jump<span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="br0">&#93;</span><br /> <span class="br0">&#125;</span>
  </div>
</div> We first check a boolean value which is set to true when the jump button is pressed. The variable 

*y_jump* takes the value of y we&#8217;re moving the player to. The calc_jump() function will be described below. We then check if this value is less than 0 i.e. lower than the starting point. If it is, we set jumping to false as we no longer wish to jump. The whole loop is then exited, as the condition is no longer true. If we&#8217;re not back at the starting point, we set the variable *jump_offset* to the value of the y we just retrieved from calc\_jump(). We use this value to offset the position of the player on screen when rendered. So how do we calculate the values of the y from a parabola? Let&#8217;s look at the calc\_jump() function. <div class="codecolorer-container java railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="java codecolorer">
    <span class="kw1">public</span> <span class="kw4">int</span> calc_jump<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw4">int</span> y <span class="sy0">=</span> <span class="br0">&#40;</span><span class="kw4">int</span><span class="br0">&#41;</span> <span class="br0">&#40;</span><span class="sy0">-</span><span class="nu0">0.02</span> <span class="sy0">*</span> <a href="http://www.google.com/search?hl=en&q=allinurl%3Amath+java.sun.com&btnI=I%27m%20Feeling%20Lucky"><span class="kw3">Math</span></a>.<span class="me1">pow</span><span class="br0">&#40;</span>tick, <span class="nu0">2</span><span class="br0">&#41;</span> <span class="sy0">+</span> <span class="nu0">3.2</span> <span class="sy0">*</span> tick<span class="br0">&#41;</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>y <span class="sy0"><</span> <span class="nu0"></span><span class="br0">&#41;</span> <br /> &nbsp; &nbsp; &nbsp; &nbsp; tick <span class="sy0">=</span> <span class="nu0"></span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="kw1">else</span> <br /> &nbsp; &nbsp; &nbsp; &nbsp; tick <span class="sy0">+=</span> <span class="nu0">5</span><span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="kw1">return</span> y<span class="sy0">;</span><br /> <span class="br0">&#125;</span>
  </div>
</div> The tick variable is a simple counter that is incremented by 5 every time the function is called. This will represent our set of x-values on a parabola. Using the y=-x

<sup>2</sup> parabola, we can generate a set of parabolic values in an upside down u. To get the numbers in the format we want, we multiply the result by -0.02. This returns 2% of the original result and negates it. We then add on a value that masks the negative value. When the x value (our tick variable) reaches a certain number, the result will become greater than the masking value and start to drop back down. We catch it before the numbers start going back below 0. This calculation will result in a series of numbers that will rise until a certain point, peak, and then drop back down in the same exact same intervals. This produces nice smooth curve for our jumping action. When the y value is less than 0, the tick counter is reset and the value returned. The jumping statement will then set jumping to be false. The jump_offset will also be set to 0, as we&#8217;re not jumping anymore.

 [1]: http://i.imgur.com/eOIeeEX.jpg