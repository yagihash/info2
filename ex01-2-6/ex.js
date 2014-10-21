$(function() {
  $("form#latlng").submit(function() {
    var lat1 = $("input#lat1").val(), lng1 = $("input#lng1").val();
    var lat2 = $("input#lat2").val(), lng2 = $("input#lng2").val();
    getDistance(lat1, lng1, lat2, lng2).done(function() {
      var json = this.promise.json;
      $("body").append('<span id="t"></span>');
      $("#t").text(json.distance+'' + json.unit);
    });
    return false;
  });
  
  function getDistance(lat1, lng1, lat2, lng2) {
    var d = new $.Deferred();
    var url = "http://lab.uribou.net/ll2dist/" +
              "?ll1=" + lat1 + "," + lng1 + 
              "&ll2=" + lat2 + "," + lng2 +
              "&jsonp=callback";
    $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      jsonpCallback: "callback",
      success: function(json) {
        d.promise.json = json;
        d.resolve();
      }
    });
    return d.promise();
  }
});
