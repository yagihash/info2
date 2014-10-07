$(function() {
  $("form#latlng").submit(function() {
    var lat1 = $("input#lat1").val(), lng1 = $("input#lng1").val();
    var lat2 = $("input#lat2").val(), lng2 = $("input#lng2").val();
    var url = "http://lab.uribou.net/ll2dist/" +
              "?ll1=" + lat1 + "," + lng1 + 
              "&ll2=" + lat2 + "," + lng2 +
              "&jsonp=getDistance";
    $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      jsonpCallback: "getDistance",
      success: function(json) {
        $("body").append('<span id="t"></span>');
        $("#t").text(json.distance+'' + json.unit);
      }
    });
    return false;
  });
});
