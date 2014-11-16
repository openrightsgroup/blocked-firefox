	CustomButton = {

1: function () {
	var url = gBrowser.contentDocument.location;
	if ("about:" != String(url).substr(0,6)) {
		var win = window.open("https://www.blocked.org.uk/results?url=" + encodeURIComponent(url), '_blank');
	 	win.focus();
	}
  },

}
