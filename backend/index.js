const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());  // Enable CORS
app.use(bodyParser.json());  // Parse incoming JSON requests

// Test route to check if the server is running
app.get('/', (req, res) => {
    res.send('NoteGenius Backend is Running');
});

// Define the port where the backend will run
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
