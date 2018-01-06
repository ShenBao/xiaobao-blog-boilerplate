---
layout: page
title: "列表"
permalink: /list/
---

<ul class="post-list">
{% for post in site.posts %}
    {% assign date_format = site.minima.date_format | default: "%Y-%m-%d %H:%M:%S" %}
    <li>
    <span class="post-meta">{{ post.date | date: date_format }}</span>

    <h2>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h2>
    </li>
{% endfor %}
</ul>

