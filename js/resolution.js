var background = false;
var screenWidth = window.screen.width;

if (screenWidth <= 1280) {
    background = true;
}

if (background) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/background.css';
    link.media = 'all';

    head.appendChild(link);
} else {
    var backgroundDiv = document.getElementById('background');
    var img = document.createElement('img');

    img.src = 'images/background.jpg';
    img.alt = 'Background';

    background.appendChild(img);
}
