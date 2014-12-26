$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var search = this.search.value;
    getResult(search).then(function() {
      var result = this.promise.result;
      $("#result").html("");
      for(var i = 0; i < result.length; i++)
        $("#result").append($("<li></li>").text(result[i].title));
    });
  });
});

function getResult(search) {
  var d = new $.Deferred();
  var url = "http://ja.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=***Search***&aplimit=50&format=json&callback=callback";
  var url = url.replace("***Search***", search);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "jsonp",
    jsonpCallback: "callback",
    success: function(json) {
      d.promise.result = json.query.allpages;
      d.resolve();
    }
  });
  return d.promise();
}
