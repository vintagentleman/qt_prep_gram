---
layout: page
title: Публикации
permalink: /papers/
---

{% assign years = "2020,2019,2018" | split: "," %}
{% for year in years %}

## {{ year }} г.

<ul>
  {% for paper in site.data.papers[year] %}
  <li>
    {% if paper.author %} <i>{{ paper.author }}</i> {% endif %}
    <b>{{ paper.title }}</b>
    // {{ paper.edition }}.
    {% if paper.url %} URL: <a href="{{ paper.url }}">{{ paper.url }}</a> {% endif %}
  </li>
  {% endfor %}
</ul>

{% endfor %}
