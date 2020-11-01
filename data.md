---
layout: page
title: Материалы
permalink: /data/
---

## 2018 г.

{% assign assets = site.static_files | where: "year", 2018 %}
<ul>
  {% for asset in assets %}
  <li><a href="{{ asset.path | relative_url }}">{{site.data.data["2018"][asset.basename]}}</a></li>
  {% endfor %}
</ul>

## 2019 г.

{% assign assets = site.static_files | where: "year", 2019 %}
<ul>
  {% for asset in assets %}
  <li><a href="{{ asset.path | relative_url }}">{{site.data.data["2019"][asset.basename]}}</a></li>
  {% endfor %}
</ul>
