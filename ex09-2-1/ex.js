window.addEventListener("DOMContentLoaded", function() {
  var mapElm = document.createElement("div");
  mapElm.style.width = mapElm.style.height = "300px";
  displayMap(35, 135, mapElm);
  document.body.insertBefore(mapElm, document.body.firstChild);
  var form = document.forms[0];
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    displayMap(Number(this.lat.value), Number(this.lng.value), mapElm);
    this.lat.focus();
  });
});

function displayMap(lat, lng, mapElm) {
  var lat = Number(lat);
  var lng = Number(lng);
  var latlng = new google.maps.LatLng(lat, lng);
  var opt = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(mapElm, opt);
  return map;
}
