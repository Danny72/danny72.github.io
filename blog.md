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

  <article>
  <h4><a href="{{post.url}}">{{post.title}}</a></h4>
  <p>{{post.content | truncatewords: 22}}</p>
  </article>

  {% if this_year != next_year %}
  <h3 class="{{next_year}}_header">{{next_year}}</h3>
  {% endif %}
{% endfor %}
</div>
