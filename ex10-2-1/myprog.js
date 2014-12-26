function func(json) {
    var i;
    for (i=0; i < json.query.allpages.length; i++) {
	document.write(i + ": " + json.query.allpages[i].title + "<br />");
    }
}
