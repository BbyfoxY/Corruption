var title = document.getElementById('title');
function main() {
	var t = document.createElement('h1');
	var ta = document.createElement('a');
	var tat = document.createTextNode('Shade');
	ta.href = '../';
	ta.appendChild(tat);
	t.appendChild(ta);
	title.appendChild(t);
}
main();