window.addEventListener("DOMContentLoaded", function() {
  var url = "//web.sfc.keio.ac.jp/~kei/info2-lib/calc.php";
  var form = document.forms[0];
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    a = this.a.value;
    b = this.b.value;
    var dst = url + makeQueryParams({
      a: a,
      b: b,
    });
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dst, false);
    xhr.send();
    if(xhr.status === 200) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(xhr.responseText, "application/xml");
      var sum = getResult(doc, "add") || "なし";
      var sub = getResult(doc, "sub") || "なし";
      var pro = getResult(doc, "mul") || "なし";
      var div = getResult(doc, "div") || "なし";

      document.getElementById("sum").innerHTML = sum;
      document.getElementById("sub").innerHTML = sub;
      document.getElementById("pro").innerHTML = pro;
      document.getElementById("div").innerHTML = div;
    }
  });
});

function makeQueryParams(params) {
  var ret = [];
  for(n in params)
    ret.push(n + "=" + params[n]);
  return "?" + ret.join("&");
}

function getResult(doc, name) {
  try {
    var r = doc.getElementsByTagName(name)[0].textContent;
    return r;
  } catch(e) {
    return false;
  }
}
