function func(json) {
    var e = document.getElementById('listOfKeio');
    var i;
    for (i=0; i < json.query.allpages.length; i++) {
	e.innerHTML += i + ": " + json.query.allpages[i].title + "<br />";
    }
}

function getFromWikipedia() {
    var e = document.getElementById('listOfKeio');
    var o = document.createElement("script");
    o.setAttribute("src", "http://ja.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=慶應&aplimit=50&format=json&callback=func");
    e.appendChild(o);
}
