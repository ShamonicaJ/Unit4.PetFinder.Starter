// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    // Pseudocode:
    // 1. Use the sendFile method of the response object to send the index.html file
    // 2. The path to the index.html file is obtained by joining the directory name with 'public/index.html'
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
    // Send 'Hello World!' as the response
    // Pseudocode:
    // 1. Use the send method of the response object to send 'Hello World!'
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // Send the pets array as a response
    // Pseudocode:
    // 1. Use the json method of the response object to send the pets array
    res.status(200).json(pets)

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    // Pseudocode:
    // 1. Use the query property of the request object to get the owner
    const owner = req.query.owner;


    // find the pet in the pets array
    // Pseudocode:
    // 1. Use the find method of the pets array to find the pet with the matching owner
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response
    // Pseudocode:
    // 1. If the pet is found, use the json method of the response object to send the pet
    // 2. If the pet is not found, use the send method of the response object to send 'Pet not found'
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('No pets found for this owner');
    }

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    // Pseudocode:
    // 1. Use the params property of the request object to get the name
    const name = req.params.name;


    // find the pet in the pets array
    // Pseudocode:
    // 1. Use the find method of the pets array to find the pet with the matching name
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    // Pseudocode:
    // 1. If the pet is found, use the json method of the response object to send the pet
    // 2. If the pet is not found, use the send method of the response object to send 'Pet not found'
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('Pet not found');
    }
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
    // Log a message when the server starts listening
    // Pseudocode:
    // 1. Use the console.log method to log 'Server is listening on port ' + POR
});

module.exports = app;