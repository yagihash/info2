window.addEventListener("DOMContentLoaded", function() {
  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tfoot = document.createElement("tfoot");
  var tbody = document.createElement("tbody");
  var headers = ["日付", "始値", "高値", "安値", "終値"];
  thead.appendChild(createTableRow(headers, true));
  tfoot.appendChild(createTableRow(headers, true));
  for(var i = 0; i < usdjpy.length; i++) {
    tbody.appendChild(createTableRow(usdjpy[i], false));
    if(!((i+1) % 5))
      tbody.appendChild(createTableRow(headers, true));
  }
  table.appendChild(thead);
  table.appendChild(tfoot);
  table.appendChild(tbody);
  document.body.appendChild(table);
});

function createTableRow(data, isHeader) {
  if(!Array.isArray(data) || isHeader === undefined)
    return false;
  var tr = document.createElement("tr");
  var cname = isHeader ? "th" : "td";
  for(var i = 0; i < data.length; i++) {
    var child = document.createElement(cname);
    var tnode = document.createTextNode(data[i]);
    child.appendChild(tnode);
    tr.appendChild(child);
  }
  return tr;
}
