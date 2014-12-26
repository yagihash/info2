window.addEventListener("DOMContentLoaded", function() {
  var form = document.forms[0];
  // https://web.sfc.keio.ac.jp/~kei/info2-lib/zipcodeOfKanagawa.json
  // でA-C-A-Oヘッダを吐いていないのでPHPファイルを置いてそちらで読み込む
  // ローカルで課題やるのが面倒だったので暫定措置
  var url = "./proxy.php";
  getJSON(url).then(function(json) {
    this.zipcodes = json.zipcodeOfKanagawa;
  }).catch(function(msg) {
    alert(msg);
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(zipcodes) {
      var elm = document.getElementById("result");
      elm.lastChild.remove();
      var code = this.zipcode.value.replace(/[^0-9]/g, "");
      var result = searchAddress(code, zipcodes);
      if(result) {
        elm.appendChild(document.createTextNode(result));
      } else {
        elm.appendChild(document.createTextNode("なし"));
      }
    }
  });
});

function getJSON(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  return new Promise(function(resolve, reject) {
    xhr.addEventListener("readystatechange", function(e) {
      if(this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else if(this.status !== 200) {
        reject("Couldn't get JSON file.");
      }
    });
  });
}

function searchAddress(needle, data) {
  for(var i = 0; i < data.length; i++) {
    var o = data[i];
    if(o.zipcode == needle)
      return o.address;
  }
  return false;
}
