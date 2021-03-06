window.addEventListener("DOMContentLoaded", function() {
  var img = document.createElement("img");
  var size = img.style.width = img.style.height = 400;
  var url = "//map.olp.yahooapis.jp/OpenLocalPlatform/V1/static";
  var appid = "dj0zaiZpPTh2UURieGJacVZEdyZzPWNvbnN1bWVyc2VjcmV0Jng9NjI-";
  var form = document.forms[0];
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    lat = this.lat.value;
    lng = this.lng.value;
    img.src = url + makeQueryParams({
      appid: appid,
      lat: lat,
      lon: lng,
      z: 12,
      width: size,
      height: size,
    });
    this.lat.focus();
  });
  document.body.appendChild(img);
});

function makeQueryParams(params) {
  var ret = [];
  for(n in params)
    ret.push(n + "=" + params[n]);
  return "?" + ret.join("&");
}
