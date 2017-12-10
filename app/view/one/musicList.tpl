{% extends "../layout/oneLayout.tpl" %}
{% block content %}
	<div id="mescroll" class="mescroll">
        <!--您的项目如果是在微信,QQ,Safari等等iOS浏览器访问的,则需再嵌套<div class="mescroll-bounce"><div>,可解决列表顶部下拉和底部上拉露出浏览器灰色背景和卡顿2秒的问题,可避免数据不满屏下拉刷新dom元素可能不渲染的问题-->
        <div class="mescroll-bounce">
            <div id="dataList"  class="data-list music-list v-transition">
                {% for musicItem in musicList %}
                    {% include "./musicItem.tpl" %}
                {% endfor %}    
            </div>
        </div>
    </div>        
{% endblock %}        