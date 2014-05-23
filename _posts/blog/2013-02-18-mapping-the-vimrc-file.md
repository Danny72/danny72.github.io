---
title: Mapping the VIMRC file
author: Daniel
layout: post
permalink: /mapping-the-vimrc-file/
categories:
  - vim
tags:
  - vimrc
---
Mapping extra commands for VIM is simple. you just need to make some additions to the **.vimrc** file. It can be found in your home directory **~/.vimrc** <br class="blank" /> Mapping the F3 key to write the file and quit <div class="codecolorer-container vim railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="vim codecolorer">
    <span class="kw1">map</span> <span class="kw2"><F3></span> <span class="sy0">:</span>wq<span class="sy0"><</span>enter<span class="sy0">></span>
  </div>
</div> Mapping F5 to write the file, compile the file as c code, and run the compiled program. 

<div class="codecolorer-container vim railscasts" style="overflow:auto;white-space:nowrap;">
  <div class="vim codecolorer">
    <span class="kw1">map</span> <span class="kw2"><F5></span> <span class="sy0">:</span>w<span class="sy0"><</span>CR<span class="sy0">></span> <span class="sy0">:!</span>gcc <span class="sy0">-</span>o chapter<span class="sy0">%<</span> <span class="sy0">%</span><span class="kw2"><CR></span> <span class="sy0">:!./</span>chapter<span class="sy0">%<</span><span class="kw2"><CR></span>
  </div>
</div> :w<CR> &#8211; writes the file and clears :% &#8211; name of current file :%< &#8211; name of current file without extension