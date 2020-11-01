---
layout: page
title: Публикации
permalink: /papers/
---

{% assign years = site.data.papers %}
{% for year in years %}
  <h2>{{year[0]}} г.</h2>
  <ul>
    {% for paper in year[1] %}
    <li><i>{{ paper.author }}</i> <b>{{ paper.title }}</b> // {{paper.edition}}.</li>
    {% endfor %}
  </ul>
{% endfor %}
