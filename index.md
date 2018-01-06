---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
# layout: home
layout: index

---


<div class="index">
    <h3>
        Complain less Think more The future will be better!
    </h3>
    <h3>
        少抱怨，多思考，未来更美好!
    </h3>

    <div class="info">
        <a class="btn btn-primary" href="{{ "/about" | relative_url }}">了解小宝</a>
        <a class="btn btn-secondary" href="https://github.com/ShenBao/" target="_blank">GitHub</a>
    </div>
</div>

<style>
    .index {
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .index h3{
        /* text-align: center; */
        font-size: 30px;
        line-height: 60px;
    }
    .index .info {
        padding-top: 40px;
    }
    .index .info a {
        text-decoration: none;
    }
    .index .btn {
        display: inline-block;
        height: 38px;
        width: 120px;
        border: 1px solid #fff;
        border-radius: 19px;
        color: #fff;
        line-height: 38px;
        letter-spacing: 0.5px;
        text-align: center;
        font-weight: normal;
        margin-right: 10px;
    }
    .index .btn-primary {
        background: #22ab28;
        border-color: #209425;
    }
    .index .btn-secondary {
        border: 1px solid #22ab28;
        border-radius: 100px;
        color: #22ab28;
    }
</style>

