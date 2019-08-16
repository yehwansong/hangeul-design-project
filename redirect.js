if (location.hash === "#redirected") {
  location.hash = "";
}
else {
	var rnd = Math.floor(Math.random() * 3) + 1  
  location.href='index_'+ rnd + ".html#redirected";
}