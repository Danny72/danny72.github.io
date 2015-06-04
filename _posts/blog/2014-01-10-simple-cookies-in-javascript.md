---
title: Simple Cookies in Javascript
layout: post
permalink: /simple-cookies-in-javascript/
category: blog
tags:
  - cookies
  - javascript
---
You can create and delete cookies pretty easily using Javascript. Reading a cookie though is a lot more annoying and fiddly to do. 

### Create a Cookie

    > document.cookie = 'test_data=true; expires=Fri, 3 Aug 2020 20:47:11 UTC; path=/';

You just need to pass a semi-colon formatted string to document.cookie. The first part is the data stored in the cookie, formatted in a key=value pair. The second parameter is the expiry date of the cookie. The final parameters are the domain and path the cookie applies to. If you omit the domain, the domain the cookie is created in is used. The path allows you to specify a specific path inside the domain. If you want it to apply to the entire domain, use &#8220;/&#8221;. 

### Delete a Cookie

If you want to delete the cookie, you can just set the expiry date to a date in the past, and the browser will delete it for you. You can just overwrite the previous cookie. 

    //note the date
    > document.cookie = 'test_data=true; expires=Fri, 3 Aug 2000 20:47:11 UTC; path=/';

### Read a Cookie

Javascript&#8217;s cookie management is pretty bad. The cookies aren&#8217;t stored in an object, but as one single string. You can parse them into a object yourself on each page load, if you&#8217;re going to be doing a lot of work with cookies. For access to a single cookie at a time, you can just regex match on the document.cookie string. 

    > document.cookie.match(/test_data=(.*?);/);
    ["test_data=true;", "true"]
