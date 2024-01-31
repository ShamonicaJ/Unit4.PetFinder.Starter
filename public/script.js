window.onload = function() {
    // Make a GET request to your API
    fetch('http://localhost:8080/api/v1/pets')
        .then(response => response.json())
        .then(data => {
            // Create a new table element
            const petTable = document.createElement('table');

            // Create table headers
            const tableHeaders = document.createElement('tr');
            const nameHeader = document.createElement('th');
            const ownerHeader = document.createElement('th');

            nameHeader.textContent = 'Name';
            ownerHeader.textContent = 'Owner';

            tableHeaders.appendChild(nameHeader);
            tableHeaders.appendChild(ownerHeader);
            petTable.appendChild(tableHeaders);

            // Loop through the data and add each pet's name and owner to the table
            data.forEach(pet => {
                const petRow = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = pet.name;

                const ownerCell = document.createElement('td');
                ownerCell.textContent = pet.owner;

                petRow.appendChild(nameCell);
                petRow.appendChild(ownerCell);

                petTable.appendChild(petRow);
            });

            // Append the table to the body of the page
            document.body.appendChild(petTable);
        })
        .catch(error => console.error('Error:', error));
};
