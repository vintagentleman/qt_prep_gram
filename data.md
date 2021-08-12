---
layout: page
title: Материалы
permalink: /data/
---

{% assign years = "2020,2019,2018" | split: "," %}
{% for year in years %}
{% assign assets = site.static_files | where: "year", year %}

## {{ year }} г.

<ul>
  {% for asset in assets %}
  {% if site.data.data[year][asset.basename] %}
  <li><a href="{{ asset.path | relative_url }}">{{ site.data.data[year][asset.basename] }}</a></li>
  {% endif %}
  {% endfor %}
</ul>

{% endfor %}
