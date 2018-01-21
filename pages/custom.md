---
layout: page
title: "自定义列表内容"
is-show-edit: false
---

<!-- 这里获取的是_data文件夹里的custom.json文件，需要在custom.json配置相关参数 -->

<div>
    {% assign groupIndex = 0 %}
    {% for group in site.data.custom.list  %}
        {% assign groupIndex = groupIndex | plus: 1 %}
        <div class="site-page-list">
            <legend>
                <b>{{ group.title }}</b>
            </legend>
            <ul class="list">
                {% assign index = 0 %}
                {% for item in group.list %}
                <li>
                    {% assign index = index | plus: 1 %}
                    <small>{{ groupIndex }}-{{ index }}. </small>
                    <a class="post-link"
                        href="{{ site.baseurl }}{{ site.data.custom.basePath }}{{ item.path }}"
                        title="{{ item.title | escape }}"
                        >
                        {{ item.title | escape }}
                    </a>
                </li>
                {% endfor %}
            </ul>
        </div>
    {% endfor %}

</div>
