---
title: Searching and replacing text in VIM
author: Daniel
layout: post
permalink: /searching-and-replacing-text-in-vim/
categories:
  - vim
tags:
  - regex
  - replace
  - search
---
The simplest way to find a piece of text is using **/[text]** in command mode. This will move the cursor to the first instance of your string. You can then move to the nest instance by pressing lower case **n**. To move back to the previous instance, use upper case **N**. The word can then easily be edited by using **cw**. <div class="codecolorer-container text railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="text codecolorer">
    :/[text] - finds specified string in file<br /> n - move cursor to next instance of string<br /> N - move cursor to previous instance of string<br /> cw - replace current word under cursor
  </div>
</div> Often you&#8217;ll find a piece of text using search, but the string of text you actually want to edit is much further along the line. For instance if you wanted to edit an IP address in a file e.g. 192.168.1.3. You could use 

**/192.** to find the address. As you only want to edit the last digit of the address, you can type **f3** to move the cursor to the next instance of **3**. Then press **r5** to change the address to 192.168.1.5. This is all done in command mode. <div class="codecolorer-container text railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="text codecolorer">
    f[char] - move cursor to first instance of char<br /> r[mychar] - replace char under cursor with mychar
  </div>
</div> The most powerful way to find and replace text en masse is to use regular expressions. The format string is :%s/search/replace/gc. 

**%s** means we want to search and replace on the current buffer(file). The **search** is the string to be replaced, and is written in regex. The **replace** is the text string we want to replace it with. The **g** ensures it work on all matches inside the file, and the **c** will ask us to confirm each replacement. For example, if we wanted to replace every instance of 1.8.* with 1.9.2 inside a config file, we could use <div class="codecolorer-container ruby railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="ruby codecolorer">
    :<span class="sy0">%</span>s<span class="sy0">/</span><span class="nu0">1.8</span>.<span class="me1">d</span><span class="sy0">/</span>1.9.2<span class="sy0">/</span>gc
  </div>
</div> Although overkill for changing one or two values, it saves a lot of time if you&#8217;re doing a large amount of edits.