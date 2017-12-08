{% extends "../layout/oneLayout.tpl" %}
{% block content %}
        <div class="music-list v-transition">
            {% for musicItem in musicList %}
                {% include "./musicItem.tpl" %}
            {% endfor %}    
        </div>
{% endblock %}        