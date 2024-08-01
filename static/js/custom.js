document.getElementById('mapfs').addEventListener('click', function() {
    var iframe = document.getElementById('map');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari 和 Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE 11
        iframe.msRequestFullscreen();
    }
});

//阻止http升到https
document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.getElementById('map');
    iframe.src = 'http://39.102.209.55:8123/';
  });