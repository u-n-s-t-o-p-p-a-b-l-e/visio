fetch('./text.txt')
.then(response => response.text())
	.then(data => {
		const content = document.getElementById('content');
		content.innerHTML = '';

		for (let i = 0; i < 100; i++) {
			content.innerHTML += data;
		}
	});
