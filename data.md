---
layout: page
title: Материалы
permalink: /data/
---

{% assign years = site.data.data %}
{% for year in years %}
  <h2>{{year[0]}} г.</h2>
  <ul>
    {% for datum in year[1] %}
    <li><a href="/assets/{{ year[0] }}/{{ datum.filename }}.pdf">{{ datum.name }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
