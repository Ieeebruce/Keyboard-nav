var $body = document.body;
var $lightswitch = document.getElementById('space');
var $light = document.querySelector("#space>span")
var light = true;
var switchLight = function () {
  if (light) {
    $body.className = 'night';
    $light.className = 'green';
    light = false;
  } else {
    $body.className = 'light';
    $light.className = '';
    light = true;
  }
}
$lightswitch.onclick = switchLight;
