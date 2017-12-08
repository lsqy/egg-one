{% extends "../layout/oneLayout.tpl" %}
{% block content %}
        <div class="music-list v-transition">
            {% for item in list %}
                {% set index = ((page-1) * pageSize + loop.index) %}
                {% include "./musicItem.tpl" %}
            {% endfor %}    
        </div>
{% endblock %}        