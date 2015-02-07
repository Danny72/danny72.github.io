---
layout: page
title: Blog
permalink: /blog/
category: blog
colour: lightcoral
---
<div id="blog_posts">
{% for post in site.posts %}
  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

  {% if forloop.first %}
  <h3 class="{{ this_year }}_header">{{this_year}}</h3>
  {% endif %}

  <article class='blog_snippit'>
      <h4><a href="{{post.url}}">{{post.title}}</a></h4>
      <div class='blog_snippit_date'>{{post.date | date: "%b %-d"}}</div>
      {%comment%} the auto p tag were breaking layout so they have been removed {%endcomment%}
      <p>{{post.content | truncatewords: 22 | remove: '<p>' | remove: '</p>'}}</p>
  </article>

  {% if this_year != next_year %}
  <h3 class="{{next_year}}_header">{{next_year}}</h3>
  {% endif %}
{% endfor %}
</div>
