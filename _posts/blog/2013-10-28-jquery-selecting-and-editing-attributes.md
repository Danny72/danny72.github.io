---
title: 'Jquery: Selecting and Editing attributes'
layout: post
permalink: /jquery-selecting-and-editing-attributes/
categories:
  - code
tags:
  - attributes
  - javascript
  - jquery
---
To select attributes using Jquery, we use the attr() method. This method allows us to both retrieve and modify attribute values, depending on the number of arguments passed.

###Get attribute value

To get the attribute value, we have to pass the name of the attribute we want e.g. the href attribute. 

        > $("a").attr("href")
        "http://www.example.org"

Calling attr() on a selection with more than one element, will return the value for the first element in the selection. This behaviour holds true for all getter methods in Jquery except .text(), which returns all the text values concatenated together. 

### Set attribute value 

To set an attribute value, we use the attr() method again, but we pass an additional parameter which is the value we want to set. 

        > $("a").attr("href","http://www.google.com")
        [<a href=​"www.google.com" id=​"back">​Back​</a>​,
        <a href=​"www.google.com" onclick=​"window.location.reload()​">​Reload​</a>​,
        <a href=​"www.google.com" id=​"forward">​Forward​</a>​]

Unlike returning the value, the setter method will act on ALL elements in the selection. If you select all anchor elements from the DOM and set the &#8220;href&#8221; attribute, every link will be changed! If you wish to only change only a few elements, narrow down your selection or use the eq(i) method to select specific elements. 

        //select 1st <a> in DOM and change attribute
        > $("a").eq(0).attr("href","http://www.google.com")
        [<a href=​"www.google.com" id=​"back">​Back​</a>​]
