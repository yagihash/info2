$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var search = this.search.value;
    getResult(search).then(function() {
      var result = this.promise.result.data;
      $("#result").text(result.fullAddress);
    }).fail(function() {
      $("#result").text("Error.");
    });
  });
});

function getResult(search) {
  var search = search.replace(/[^0-9]/g, "");
  var d = new $.Deferred();
  var url = "https://api.zipaddress.net/?zipcode=***Search***";
  var url = url.replace("***Search***", search);
  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: function(json) {
      d.promise.result = json;
      d.resolve();
    },
    error: function(err) {
      d.reject();
    }
  });
  return d.promise();
}
