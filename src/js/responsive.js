(function () {
	
	var id = 'netflixenhancementsuite-responsive';
	var head = document.getElementsByTagName('head')[0];
	var existingStyle = document.getElementById(id);
	
	if(existingStyle) {
		head.removeChild(existingStyle);
	}
	
	var style = document.createElement('style');
	style.type = 'text/css';
	style.id = id;
	style.innerHTML = [
		'@media screen and (max-width: 799px) and (min-width: 500px) {',
			'h1 .title { font-size: 22px; }',
			'.jawBonePane .overview { font-size: 13px; }',
			'.jawBoneContainer .menu { display: flex; font-size: 11px }',
			'.jawBoneContainer .menu { display: flex; }',
		'}'
	].join('');

	head.appendChild(style);

}());