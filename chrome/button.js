	CustomButton = {

1: function () {
	if ("about:startpage" != gBrowser.contentDocument.location) {
		var win = window.open("https://www.blocked.org.uk/results?url=" + encodeURIComponent(gBrowser.contentDocument.location), '_blank');
	 	win.focus();
	}
  },

}
