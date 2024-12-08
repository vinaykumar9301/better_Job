// Import express library
const express = require('express');

// Create an express app
const app = express();

// Set the port number the server will listen on
const PORT = process.env.PORT || 3000;

// Simple route to verify the app is running
app.get('/', (req, res) => {
  res.send('Hello from Node.js app running in Kubernetes!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
