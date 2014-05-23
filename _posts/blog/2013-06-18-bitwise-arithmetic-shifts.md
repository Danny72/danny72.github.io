---
title: Bitwise Arithmetic shifts
author: Daniel
layout: post
permalink: /bitwise-arithmetic-shifts/
categories:
  - code
tags:
  - arithmetic shift
  - bitwise
---
It&#8217;s sometimes preferable to manipulate numbers on the binary level, as it&#8217;s much faster for the compiler/interpreter. This is especially useful when performing multiple calculations whilst inside a loop or nested loops. Note this only works for numbers that are multiples of 2 e.g. the even numbers. <strong style="text-decoration: underline">Left Shift</strong> In a left shift operation (**<<** in most languages) all of the bits are shifted to the left. The right hand side is filled up shifting 0s onto it. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    Left<span class="sy0">-</span>Shift by <span class="nu0">1</span><br /> <br /> &nbsp; <span class="nu8">01100110</span> <span class="br0">&#40;</span><span class="nu0">102</span> in decimal<span class="br0">&#41;</span><br /> <span class="sy0">=</span> <span class="nu0">11001100</span> <span class="br0">&#40;</span><span class="nu0">204</span> in decimal<span class="br0">&#41;</span>
  </div>
</div> This has the effect of multiplying 

**n by 2<sup>n</sup>**. In a single shift, you&#8217;re effectively doubling n as **n * 2<sup>1</sup>**. If you start left-shifting by more than 1, the multiplier goes up exponentially. A **left-shift by 3** is equivalent to **n * 2<sup>3</sup>** or **n * 8**. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    Left<span class="sy0">-</span>Shift by <span class="nu0">3</span><br /> <br /> &nbsp; &nbsp; &nbsp;<span class="nu8">01100110</span> <span class="br0">&#40;</span><span class="nu0">102</span> in decimal<span class="br0">&#41;</span><br /> <span class="sy0">=</span> <span class="nu8">01100110000</span> <span class="br0">&#40;</span><span class="nu0">816</span> in decimal<span class="br0">&#41;</span>
  </div>
</div>

<strong style="text-decoration: underline">Right Shift</strong> In a right shift operation (**>>** in most languages), the bits are all shifted to the right. The left side has the most significant bit (the sign bit) shifted onto it n number of times. This preserves the sign of the number. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    Right<span class="sy0">-</span>Shift by <span class="nu0">1</span><br /> <br /> &nbsp; <span class="nu8">01100110</span> <span class="br0">&#40;</span><span class="nu0">102</span> in decimal<span class="br0">&#41;</span><br /> <span class="sy0">=</span> <span class="nu8">00110011</span> <span class="br0">&#40;</span><span class="nu0">51</span> in decimal<span class="br0">&#41;</span>
  </div>
</div> The right shift has the effect of 

**dividing n by 2<sup>n</sup>**. A single shift to the right effectively halves the number as **n / 2<sup>1</sup>** is **n / 2**. When you right shift by more than 1, you can get a non-integer result i.e. right-shifting 102 by 2 is 102/4=25.5. When **right-shifting an unsigned number** (one&#8217;s complement), the number will be **rounded down** towards 0. So 102 >> 2 = 25. As right shifting preserves the sign, you can also shift negative numbers (two&#8217;s complement). <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    Right<span class="sy0">-</span>Shift by <span class="nu0">2</span><br /> <br /> &nbsp; <span class="nu0">10011010</span> <span class="br0">&#40;</span><span class="sy0">-</span><span class="nu0">102</span> in decimal<span class="br0">&#41;</span><br /> <span class="sy0">=</span> <span class="nu0">11100110</span> <span class="br0">&#40;</span><span class="sy0">-</span><span class="nu0">26</span> in decimal<span class="br0">&#41;</span>
  </div>
</div> When you get a non-integer result by a right-shift of a number in two&#8217;s complement, you 

**round up towards negative infinity**. So -102 >> 2 = -26