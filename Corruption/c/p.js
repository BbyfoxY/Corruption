window.onload = function() {
	var s = document.getElementById('search');
	s.addEventListener('keyup', function (e) {
		if (e.keyCode === 13) {
			g(s.value);
		}
	});
	
	function g(url) {
		if (url !== '') {
			if (url.includes('.')) {
				o(url);
			} else if (url.startsWith('https://')) {
				o(url);
			} else if (url.startsWith('http://')) {
				o(url);
			} else {
				//s(url);
			}
		} else {
			return false;
		}
	}

	function o(url) {
		var f = document.getElementById('frame');
		var l = document.getElementById('loading');
		f.style.width = 100 + '%';
		f.style.height = 90 + 'vh';
		f.style.zIndex = 2;
		s.style.display = 'none';
		setTimeout(() => {
			f.setAttribute('src', gp(url));
		}, 2000);
	}

	function gp(url) {
		return 'https://testtsunami.bbyfoxy.repl.co/corrosion/gateway?url=' + url;
	}
}