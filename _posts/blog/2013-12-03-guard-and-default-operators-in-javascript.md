---
title: Guard and Default Operators in Javascript
author: Daniel
layout: post
permalink: /guard-and-default-operators-in-javascript/
categories:
  - code
tags:
  - javascript
  - operators
---
We can use the logical &#8216;AND&#8217; (&&) and the logical &#8216;OR&#8217; (||) when evaluating values. This can be useful for writing simple and concise return statements and variable assignments. 
##### Logical AND &#8211; The Guard Operator The logical AND operator works like a guard. Consider this common pattern: 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">var</span> get_username <span class="sy0">=</span> <span class="kw2">function</span><span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>loggedin<span class="br0">&#41;</span> <span class="br0">&#123;</span><br /> &nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">return</span> username<span class="sy0">;</span><br /> &nbsp; &nbsp; <span class="br0">&#125;</span><br /> <span class="br0">&#125;</span><span class="sy0">;</span>
  </div>
</div> This can be replaced by a simple one liner: 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">var</span> get_username <span class="sy0">=</span> <span class="kw2">function</span><span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span> <span class="kw1">return</span> loggedin <span class="sy0">&&</span> username<span class="sy0">;</span> <span class="br0">&#125;</span>
  </div>
</div> If A is true, then the username value will be returned. If A is false, then false is returned. A works like a guard protecting B and will only allow access if A itself is true. 

##### Logical OR &#8211; The Default Operator The logical OR operator works the other way around. If A is true, then A is returned. If A is false, return B. This is often used to assign default values to variables, hence &#8216;default operator&#8217; 

<div class="codecolorer-container javascript railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="javascript codecolorer">
    <span class="kw2">var</span> <span class="kw3">name</span> <span class="sy0">=</span> <span class="kw3">name</span> <span class="sy0">||</span> <span class="st0">"no name assigned"</span><span class="sy0">;</span>
  </div>
</div> This is useful to set variable values when the intended value isn&#8217;t reachable. This then prevents the programs breaking when trying to perform operations on an &#8216;undefined&#8217; variable. 

##### Why this works? It&#8217;s important to note why this works, and why we don&#8217;t just get boolean values returned. Javascript will evaluate the clauses of the statement in turn. In the case of AND, it will first look at A to see if it can proceed. If true, then the value of B is returned, otherwise false is returned. This is known as 

<a href="http://en.wikipedia.org/wiki/Short-circuit_evaluation" title="Short Circut Evaluation" target="_blank">Short Circut Evaluation</a>. Javascript doesn&#8217;t perform any type coercion on any of these values, it just evaluates them as truthy or falsey for the purpose of evaluting the logical expression.