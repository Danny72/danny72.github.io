---
layout: page
title: HTML5 Test  
permalink: /html5/
category: html5
colour: lightgreen
---

This is my page for testing out the new features in the HTML5 spec.

<div id='verb_container'>
  <h2 id='title'>Verbs Tester</h2>

  <div class='flip_container' ontouchstart="this.classList.toggle('hover');">
    <div class='flipper'>
      <div class='front'>
        <h3 id='current_verb'>Tratar</h3>
      </div>
      <div class='back'>
        <h3 id='current_answer'>Test</h3>
      </div>
    </div>
  </div>
  <ul class='progress_bar'>
    <li class='dot'></li>
    <li class='dot'></li>
    <li class='dot'></li>
    <li class='dot'></li>
    <li class='dot'></li>
    <li class='dot'></li>
    <li class='dot'></li>
    <li class='dot'></li>
    <li class='dot'></li>
    <li class='dot'></li>
  </ul>
</div>
