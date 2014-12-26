$(function() {
  getResult().then(function() {
    var result = this.promise.result;
    $("#result").html("");
    for(var i = 0; i < result.length; i++)
      $("#result").append($("<li></li>").append($("<img>").attr("src", result[i].media.m)));
  });
});

function getResult() {
  var d = new $.Deferred();
  var url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json";
  $.ajax({
    type: "GET",
    url: url,
    dataType: "jsonp",
    jsonpCallback: "jsonFlickrFeed",
    success: function(json) {
      d.promise.result = json.items;
      d.resolve();
    }
  });
  return d.promise();
}
