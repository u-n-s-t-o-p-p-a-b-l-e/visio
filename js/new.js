const canvas = document.getElementById('myCanvas');
const downloadButton = document.getElementById('downloadButton');


downloadButton.addEventListener('click', () => {
	const link = document.createElement('a');

	link.href = canvas.toDataURL('image/png');

	link.download = 'canvas.png';

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
});
