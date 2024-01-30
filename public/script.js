window.onload = function() {
    // Make a GET request to your API
    fetch('http://localhost:8080/api/v1/pets')
        .then(response => response.json())
        .then(data => {
            // Create a new div to hold the pet data
            const petDataDiv = document.createElement('div');

            // Loop through the data and add each pet's name and owner to the div
            data.forEach(pet => {
                const petElement = document.createElement('p');
                petElement.textContent = `Name: ${pet.name}, Owner: ${pet.owner}`;
                petDataDiv.appendChild(petElement);
            });

            // Append the div to the body of the page
            document.body.appendChild(petDataDiv);
        })
        .catch(error => console.error('Error:', error));
};
