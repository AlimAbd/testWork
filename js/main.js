window.onload = function() {
    //封装原本根据ID获取的方法
    function get(id) {
        return document.getElementById(id);
    }
    var ul = get('menu-list');
    document.oncontextmenu = function(ev) {
        var ev = ev || window.event
        ul.style.display = 'block';
        ul.style.left = ev.pageX + 'px';
        ul.style.top = ev.pageY - 16 + 'px';
        return false;
    }
    document.onclick = function() {
        ul.style.display = 'none';
    }
    get('reload').onclick = function() {
        location.reload();
    }
    get('new-window').onclick = function() {
        window.open('https://www.google.com');
    }
    get('exit').onclick = function() {
        window.open('', '_self', '');
        window.close();
    }
    //可拖动图标代码开始
    var object = document.getElementById('logo');
    var initX, initY, firstX, firstY;

    object.addEventListener('mousedown', function(e) {

        e.preventDefault();
        initX = this.offsetLeft;
        initY = this.offsetTop;
        firstX = e.pageX;
        firstY = e.pageY;

        this.addEventListener('mousemove', dragIt, false);

        window.addEventListener('mouseup', function() {
            object.removeEventListener('mousemove', dragIt, false);
        }, false);

    }, false);

    function dragIt(e) {
        this.style.left = initX + e.pageX - firstX + 'px';
        this.style.top = initY + e.pageY - firstY + 'px';
    }
}