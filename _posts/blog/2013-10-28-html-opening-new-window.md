---
title: 'HTML &#8211; Opening new window'
layout: post
permalink: /html-opening-new-window/
categories:
  - code
tags:
  - anchor
  - html
---
To have an anchor tag open in a new window/tab, just use '_blank' as the target value. The target attribute instructs the browser where to open the link. Using &#8220;\_blank&#8221; simply tells it to open it in a new window/tab. 

        <a href="http://www.example.org" target="_blank">Opens in a new window/tab</a>

<a href="http://www.example.org" target="_blank">Opens in a new window/tab</a>

This used to be a browser specific trick that wasn't officially part of the HTML spec, but browser makers implemented it anyway as it was useful. It's now an official part of the HTML5 spec.
