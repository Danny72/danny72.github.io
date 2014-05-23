---
title: Regex replace and backreferences in Javascript
author: Daniel
layout: post
permalink: /regex-replace-and-backreferences-in-javascript/
categories:
  - code
tags:
  - backreference
  - javascript
  - regex
---
To alter strings with regex using Javascript, you can use the replace method. It&#8217;s first argument is either a regex pattern, or a string. This is matched against the provided string. The second argument is the string you want to replace the match with. <div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">></span> <span class="kw2">var</span> my_string <span class="sy0">=</span> <span class="st0">"The quick brown fox jumps over the lazy dog"</span><br /> <span class="sy0">></span> my_string <span class="sy0">=</span> my_string.<span class="me1">replace</span><span class="br0">&#40;</span><span class="co2">/dog/</span><span class="sy0">,</span><span class="st0">"cat"</span><span class="br0">&#41;</span><br /> <span class="st0">"The quick brown fox jumps over the lazy cat"</span>
  </div>
</div> Here we have a regex pattern that looks for the string &#8220;dog&#8221;. It will replace the first instance it comes across with &#8220;cat&#8221;. It will only replace all pattern matches if we use the global flag on the regex. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">></span> <span class="kw2">var</span> my_string <span class="sy0">=</span> <span class="st0">"The quick brown fox jumps over the lazy dog and dog"</span><br /> <span class="sy0">></span> my_string <span class="sy0">=</span> my_string.<span class="me1">replace</span><span class="br0">&#40;</span><span class="co2">/dog/g</span><span class="sy0">,</span><span class="st0">"cat"</span><span class="br0">&#41;</span><br /> <span class="st0">"The quick brown fox jumps over the lazy cat and cat"</span>
  </div>
</div> If the regex pattern doesn&#8217;t match anything, then nothing happens to the string. We can replace multiple patterns in a single expression. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">></span> <span class="kw2">var</span> my_string <span class="sy0">=</span> <span class="st0">"The quick brown fox jumps over the lazy dog"</span><br /> <span class="sy0">></span> my_string <span class="sy0">=</span> my_string.<span class="me1">replace</span><span class="br0">&#40;</span><span class="co2">/(fox|dog)/g</span><span class="sy0">,</span><span class="st0">"cat"</span><span class="br0">&#41;</span><br /> <span class="st0">"The quick brown cat jumps over the lazy cat"</span>
  </div>
</div> If we didn&#8217;t use the global flag here, it would only match on &#8220;fox&#8221;, and dog would remain unchanged. The flags are important and dictate how the regex pattern matches over the provided string. 

<table border="3">
  <tr>
    <td>
      <strong>/g</strong>
    </td>
    
    <td>
      matches all instances on the string
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>/i</strong>
    </td>
    
    <td>
      ignores case
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>/m</strong>
    </td>
    
    <td>
      doesn&#8217;t match over whole string, uses n as delimiter
    </td>
  </tr>
</table> We sometimes want to use what we&#8217;ve matched in the replacement string. A common example is incrementing any number that is matched with a regex pattern. To do this we need to use back references to keep hold of the match. We can then use these in the second argument to build our replacement string. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">></span> <span class="kw2">var</span> my_string <span class="sy0">=</span> <span class="st0">"A leap year has 365 days"</span><br /> <span class="sy0">></span> my_string <span class="sy0">=</span> my_string.<span class="me1">replace</span><span class="br0">&#40;</span><span class="co2">/(d{3})/</span><span class="sy0">,</span><span class="st0">"more than $1"</span><span class="br0">&#41;</span><br /> <span class="st0">"A leap year has more than 365 days"</span>
  </div>
</div> Here we&#8217;ve used the regex pattern (d{3}). This matches exactly 3 digits in any string. It&#8217;s enclosed in parentheses as that is our match group. All matches are assigned to the variables $1, $2 and so on. As we only have 1 match we use $1 to build our replacement string. We haven&#8217;t actually incremented the number though! To do this, we&#8217;ll have to use a function as the second argument to build our replacement string. 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="sy0">></span> <span class="kw2">var</span> my_string <span class="sy0">=</span> <span class="st0">"A leap year has 365 days"</span><br /> <span class="sy0">></span> my_string <span class="sy0">=</span> my_string.<span class="me1">replace</span><span class="br0">&#40;</span><span class="co2">/(d{3})/</span><span class="sy0">,</span> <span class="kw2">function</span><span class="br0">&#40;</span>fullmatch<span class="sy0">,</span> n<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; <span class="kw1">return</span> Number<span class="br0">&#40;</span>n<span class="br0">&#41;</span> <span class="sy0">+</span> <span class="nu0">1</span><span class="sy0">;</span><br /> &nbsp; <span class="br0">&#125;</span><span class="br0">&#41;</span><span class="sy0">;</span> &nbsp;<br /> <span class="st0">"A leap year has 366 days"</span>
  </div>
</div> Here the regex pattern match is replaced by the result of the function. There are a lot of potential arguments that the function can take, but in this case we just supply the matched substring and the match group. They are both the same in this example, as there&#8217;s only 1 match group. For more detail on replace() check out the 

[api][1].

 [1]: https://developer.mozilla.org/en/docs/JavaScript/Reference/Global_Objects/String/replace "api"