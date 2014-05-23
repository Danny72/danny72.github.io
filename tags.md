---
layout: page
title: Tags
permalink: /tags/
category: blog
colour: lightcoral
---
<div id="blog_tags">
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
  {% endcapture %}
{% assign sortedtags = tags | split: " " | sort %}

{% for tag in sortedtags %}
  <article>
    <h3 id="{{ tag }}">{{ tag }}</h3>
    {% for post in site.tags[tag] %}
      <div>
        <label>{{ post.date | | date: "%b %-d, %Y" }}: </label>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </div>
    {% endfor %}
  </article>
{% endfor %}
</div>
