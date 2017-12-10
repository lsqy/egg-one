<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/public/css/one.css" />
    <link rel="stylesheet" href="/public/css/normalize.css" />
    <link rel="stylesheet" href="/public/css/mescroll.min.css" />
    <title>{% block title %}One is All{% endblock %}</title>
    <script>
        (function flexible (window, document) {
            var docEl = document.documentElement
            var dpr = window.devicePixelRatio || 1

            // adjust body font size
            function setBodyFontSize () {
                if (document.body) {
                document.body.style.fontSize = (12 * dpr) + 'px'
                }
                else {
                document.addEventListener('DOMContentLoaded', setBodyFontSize)
                }
            }
            setBodyFontSize();

            // set 1rem = viewWidth / 10
            function setRemUnit () {
                var rem = docEl.clientWidth / 10
                docEl.style.fontSize = rem + 'px'
            }

            setRemUnit()

            // reset rem unit on page resize
            window.addEventListener('resize', setRemUnit)
            window.addEventListener('pageshow', function (e) {
                if (e.persisted) {
                setRemUnit()
                }
            })

            // detect 0.5px supports
            if (dpr >= 2) {
                var fakeBody = document.createElement('body')
                var testElement = document.createElement('div')
                testElement.style.border = '.5px solid transparent'
                fakeBody.appendChild(testElement)
                docEl.appendChild(fakeBody)
                if (testElement.offsetHeight === 1) {
                docEl.classList.add('hairlines')
                }
                docEl.removeChild(fakeBody)
            }
        }(window, document))
    </script>
</head>
<body>
    {% block content %}{% endblock %}
    <script src="/public/js/mescroll.min.js"></script>
    <script src="/public/js/one.js"></script>
</body>
</html>