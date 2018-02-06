---
layout: page
title: "自定义列表内容"
is-show-edit: false
---

> 这里获取的是_data文件夹里的custom.json文件，需要在custom.json配置

{% assign data = site.data.pages.custom %}
<!-- 不想要标签可以注释掉以下代码片段 -->
<div class="site-tags">
    <ul class="nav">
        {% for item in data %}
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
    {% for group in data %}
        <div class="site-page-list">
            <legend id="{{ group.title | replace:' ','-' }}">
                <b>{{ group.title }}</b>
            <!-- start type = 1 -->
            </legend>
            {% if group.type == 1 %}
                {% assign type1Index = 0 %}
                {% for itemList in group.list %}
                    <ul class="list">
                        {% for item in itemList.list %}
                        <li>
                            {% assign type1Index = type1Index | plus: 1 %}
                                <small>
                                    {{ type1Index }}. 
                                </small>
                                <a class="post-link"
                                    href="{{ site.baseurl }}{{ itemList.basePath }}{{ item.path }}"
                                    title="{{ item.title | escape }}"
                                    >
                                    {{ item.title | escape }}
                                </a>
                            </li>
                        {% endfor %}
                    </ul>
                {% endfor %}
            <!-- end type = 1 -->
            <!-- start type = 2 -->
            {% else if group.type == 2 %}
                {% assign type2Index = 0 %}
                {% for itemList in group.list %}
                    {% assign type2Index = type2Index | plus: 1 %}
                    <h4>{{ itemList.title }}</h4>
                    <ul class="list">
                        {% assign itemIndex = 0 %}
                        {% for item in itemList.list %}
                        <li>
                            {% assign itemIndex = itemIndex | plus: 1 %}
                                <small>
                                {{ type2Index }}-{{ itemIndex }}. 
                                </small>
                                <a class="post-link"
                                    href="{{ site.baseurl }}{{ itemList.basePath }}{{ item.path }}"
                                    title="{{ item.title | escape }}"
                                    >
                                    {{ item.title | escape }}
                                </a>
                            </li>
                        {% endfor %}
                    </ul>
                {% endfor %}
            {% endif%}
            <!-- end type = 2 -->
        </div>
    {% endfor %}
</div>
