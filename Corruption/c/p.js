var corrosionproxy = window.location.protocol + "//" + window.location.hostname + "/corrosion/server/request?url="

window.onload = function() {
	var s = document.getElementById('search');
	s.addEventListener('keyup', function (e) {
		if (e.keyCode === 13) {
			console.log('s');
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
				s(url);
			}
		} else {
			return false;
		}
	}

	function o(url) {
		var f = document.getElementById('frame');
		f.style.width = 100 + '%';
		f.style.height = 90 + 'vh';
		f.setAttribute('src', gp(url));
	}

	function gp(url) {
		return corrosionproxy + url;
	}
}