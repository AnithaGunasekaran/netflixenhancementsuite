(function () {
	
	var id = 'chromecast-script';
	var head = document.getElementsByTagName('head')[0];
	var existingScript = document.getElementById(id);
	
	if(existingScript) {
		head.removeChild(existingScript);
	}
	
	var script = document.createElement('script');
	
	script.src = 'http://localhost:3000/js/chromecast.js?'+Math.random();
	
	head.appendChild(script);
	
}());