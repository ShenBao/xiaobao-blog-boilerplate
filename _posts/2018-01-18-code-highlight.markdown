---
layout: post
title:  "code highlight"
date:   2018-01-18 13:20:20 +0800
categories: 
tags:
    - Jekyll
    - highlight
---

## HTML
```html
<div id="list">
    <li>1-1</li>
    <li>1-2</li>
    <li>1-3</li>
</div>
```

## CSS
```css
 .list {
    list-style: none;
    color: aqua;
}

.list li {
    text-align: center;
    font-size: 14px;
}
```

## SCSS
```scss
// Component/index.scss
.ComponentName {
    &--mofierName {}
    &__decendentName {
        &--modifierName {}
    }
    .isStateOfComponent {}
}
```

## JavaScript 
```js
$('#back-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
});
```

## json
```json
{
  "name": "ShenBao",
  "occupation": "Web App Developer"
}
```
