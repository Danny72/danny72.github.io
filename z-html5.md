---
layout: page
title: HTML5 Test  
permalink: /html5/
category: html5
colour: lightgreen
---

This is my page for testing out the new features in the HTML5 spec.

<div id='verb_container'>
  <h3>Do you know the translation?</h3>
  <h4>Click to check the answer</h4>

  <div class='flip_container' onclick = "this.classList.toggle('flipped');" ontouchstart="this.classList.toggle('flipped');">
    <div class='flipper'>
      <div class='front'>
        <span id='current_verb' class='word'>Tratar</span>
      </div>
      <div class='back'>
        <span id='current_answer' class='word'>Test</span>
        <div class='check_answer'>
          <a class='wrong'><span>Wrong ✘</span></a>
          <a class='correct'><span>Correct ✔</span></a>
        </div>
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
  <ul class='dot_matrix'>
    <div class='dot_matrix_top'>
      <li class='dot_matrix vertical seg5'></li>
      <li class='dot_matrix horizontal seg0'></li>
      <li class='dot_matrix vertical seg1'></li>
    </div>
    <div class='dot_matrix_middle'>
      <li class='dot_matrix vertical seg4'></li>
      <li class='dot_matrix horizontal seg6'></li>
      <li class='dot_matrix vertical seg2'></li>
    </div>
    <div class='dot_matrix_bottom'>
      <li class='dot_matrix horizontal seg3'></li>
    </div>
  </ul>
</div>
