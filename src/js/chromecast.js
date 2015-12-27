(function() {

	if(window.chrome && window.chrome.cast) {
		
		var mountPoint = document.getElementById('appMountPoint');
		var style = document.createElement('style');
		style.type = 'text/css';
		
		style.innerHTML = [
			'.icon-play { left: 0 !important; top: 50%; transform: translateY(-50%); }',
			'.icon-play:before, .nf-flat-button-icon-play:before { content: \'\\e775\' !important; }'
		].join('');

		document.getElementsByTagName('head')[0].appendChild(style);

		function check() {
			
			var playpausebtn = document.querySelector('.player-controls-wrapper .player-control-button.player-play-pause');
			var chromecastbtn = document.querySelector('.player-controls-wrapper .player-control-button.player-mdx');

			if(!!playpausebtn) {

				playpausebtn.click();
				chromecastbtn.click();

				return;

			}

			requestAnimationFrame(check);

		}
		
		function checkLink(el) {
			
			if(!!el) {
			
				if(el.classList.contains('playLink')) {
					
					return true;

				} else if(el.parentNode !== mountPoint) {
					
					return checkLink(el.parentNode);

				}

			}
			

			return false;

		}
		
		mountPoint.addEventListener('click', function(e) {
		
			if(checkLink(e.target)) {
				check();
			}
			
		});
		

	}

}());