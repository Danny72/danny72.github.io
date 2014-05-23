---
title: 'Learning C: Chapter 3 &#8211; Chars, Floats and Doubles'
author: Daniel
layout: post
permalink: /learning-c-chapter-3-chars-floats-and-doubles/
categories:
  - code
tags:
  - c
---
There are 4 basic data types in C: **int**, **float**, **double**, and **char**. Integers and Chars are classed as **intergrals** as they just hold whole numbers. Floats and Doubles are **real** numbers as they can be fractional numbers. **Floats and Doubles** Floats and Doubles use the same format specifier **%f** when printing. It&#8217;s considered standard to use **doubles** when working with floating point values, due to the extra precision and range of values that can be stored. **Floats** can be used when only a small amount of precision is necessary, or memory is at a premium. **Chars** A char represents a single letter in the form of it&#8217;s ASCII code. Chars are always written with single quotations to distinguish them from strings. As chars are simply numeric values, char c = &#8216;a&#8217;; and char c = 97; are the same. <div class="codecolorer-container c railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="c codecolorer">
    <span class="kw4">char</span> c <span class="sy0">=</span> <span class="nu0">97</span><span class="sy0">;</span><br /> <a href="http://www.opengroup.org/onlinepubs/009695399/functions/printf.html"><span class="kw3">printf</span></a><span class="br0">&#40;</span><span class="st0">"ASCII code for %c is %d"</span><span class="sy0">,</span> c<span class="sy0">,</span> c<span class="br0">&#41;</span><span class="sy0">;</span>
  </div>
</div>

**Type Promotion** Types can be mixed inside expressions in C, because C will convert operands to make the expression work. These conversion rules are known as **type promotion**. The compiler will convert the type with less precision up, to the type of the more precise operand. Doubles being the most precise data type, and chars being the least. You can assign more precise types to less precise types, i.e. assigning a double value to a float, but data can be lost. **Lvalues** In C there are 3 components to each variable, the **identifier**, the **lvalue **and the **rvalue**. The identifier is the human readable name of the variable. The lvalue is the hexadecimal address in memory the data is stored. The rvalue is the data itself. I&#8217;m using [Big Al&#8217;s C: Standard C][1] to learn C and write these blog posts.

 [1]: http://www.amazon.com/Big-Als-Standard-ebook/dp/B00A4JGE0M