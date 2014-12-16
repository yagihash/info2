window.addEventListener("DOMContentLoaded", function() {
  var mapElm = document.createElement("div");
  mapElm.id = "map";
  mapElm.style.width = mapElm.style.height = "300px";
  document.body.insertBefore(mapElm, document.body.firstChild);
  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
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

function locationSuccess(position) {
  var mapElm = document.getElementById("map");
  displayMap(position.coords.latitude, position.coords.longitude, mapElm);
}

function locationError(err) {
  alert("There is something wrong.\nError code: " + err.code);
}
