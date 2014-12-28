$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var search = this.search.value;
    getResult(search).then(function() {
      var result = this.promise.result;
      $("form input[name=search]").val(this.promise.search);
      if(result.code === 200)
        $("#result").text(result.data.fullAddress);
      else
        $("#result").text(result.code + ": " + result.message);
    }).fail(function() {
      $("#result").text("Communication error.");
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
      d.promise.search = search;
      d.promise.result = json;
      d.resolve();
    },
    error: function(err) {
      d.reject();
    }
  });
  return d.promise();
}
