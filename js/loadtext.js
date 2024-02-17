const textContainer = document.getElementById('textContainer');

// Fetch the text content from the file
fetch('./main-text.txt')
	.then(response => response.text())
	.then(text => {
		// Define the number of times to loop
		const loopCount = 10;

		// Loop to duplicate or append the content
		for (let i = 0; i < loopCount; i++) {
			// Create a new element for each iteration
			const paragraph = document.createElement('p');
			paragraph.textContext = text;

			// Append the new wlwmwnt to the container
			textContainer.appendChild(paragraph);
		}
	})
	.catch(error => console.error('Error fetching text file: ', error));
