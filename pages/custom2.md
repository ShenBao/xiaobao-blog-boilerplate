---
layout: page
title: "自定义列表内容2"
is-show-edit: false
---

<!-- > 这里获取的是_data文件夹里的custom2.json文件，需要在custom2.json配置 -->
<!-- 不想要标签可以注释掉以下代码片段 -->
<div class="site-tags">
    <ul class="nav">
        {% for item in site.data.custom2  %}
            <li>
                <a href="#{{ item.title | replace:' ','-' }}" title="{{ item.title }}">
                {{ item.title }}
                </a>
                {% assign size = 0 %}
                {% for itemList in item.list %}
                    {% for items in itemList.list %}
                        {% assign size = size | plus: 1 %}
                    {% endfor %}
                {% endfor %}
                <span>{{ size }}</span>
            </li>
        {% endfor %}
    </ul>
</div>

<div>
    {% for group in site.data.custom2  %}
        <div class="site-page-list">
            <legend id="{{ group.title | replace:' ','-' }}">
                <b>{{ group.title }}</b>
            </legend>
            {% assign itemListIndex = 0 %}
            {% for itemList in group.list %}
                {% assign itemListIndex = itemListIndex | plus: 1 %}
                <h4>{{ itemList.title }}</h4>
                <ul class="list">
                    {% assign itemIndex = 0 %}
                    {% for item in itemList.list %}
                    <li>
                        {% assign itemIndex = itemIndex | plus: 1 %}
                            <small>{{ itemListIndex }}-{{ itemIndex }}. </small>
                            <a class="post-link"
                                href="{{ site.baseurl }}{{ group.basePath }}{{ item.path }}"
                                title="{{ item.title | escape }}"
                                >
                                {{ item.title | escape }}
                            </a>
                        </li>
                    {% endfor %}
                </ul>
            {% endfor %}
        </div>
    {% endfor %}
</div>
