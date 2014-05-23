---
title: 'HTML &#8211; Opening new window'
author: Daniel
layout: post
permalink: /html-opening-new-window/
categories:
  - code
tags:
  - anchor
  - html
---
To have an anchor tag open in a new window/tab, just use &#8220;\_blank&#8221; as the target value. The target attribute instructs the browser where to open the link. Using &#8220;\_blank&#8221; simply tells it to open it in a new window/tab. <div class="codecolorer-container html4strict railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="html4strict codecolorer">
    <span class="sc2"><<a href="http://december.com/html/4/element/a.html"><span class="kw2">a</span></a> <span class="kw3">href</span><span class="sy0">=</span><span class="st0">"http://www.example.org"</span> <span class="kw3">target</span><span class="sy0">=</span><span class="st0">"_blank"</span>></span>Opens in a new window/tab<span class="sc2"><<span class="sy0">/</span><a href="http://december.com/html/4/element/a.html"><span class="kw2">a</span></a>></span>
  </div>
</div>

<a href="http://www.example.org" target="_blank">Opens in a new window/tab</a>