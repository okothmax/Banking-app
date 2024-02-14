// server.js

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Sample user data (replace this with a database in a real application)
const users = [
  { username: 'user1', password: 'password1', id: 1 },
  // Add more users as needed
];

app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your React app's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

// registration endpoint
app.post('/api/register', (req, res) => {
  console.log('Received registration request:', req.body);
  const { firstName, lastName, accountNumber, pin } = req.body;

  //check if the account number is already registered
  if (users.some(u => u.username === accountNumber)) {
    res.status(400).json({ message: 'Account number already registered' });
    return;
  }

  //create new user

  const newUser = {
    username: accountNumber,
    password: pin,
    firstName,
    lastName,
    id: users.length + 1,
  };

  users.push(newUser);

  //Generate a jwt token for the new user
   const token = jwt.sign({ userId: newUser.id }, 'Chelsie1234#', { expiresIn: '1h' });

  console.log('Sending response:', { token});

  //redirect the user to the login page with the token
  res.json({ token });
});



// Login endpoint
app.post('/api/login', (req, res) => {
  const { accountNumber, pin } = req.body;

  // Find user by account number
  const user = users.find(u => u.username === accountNumber);

  // Check if user exists and password is correct
  if (user && user.password === pin) {
    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, 'Chelsie123#', { expiresIn: '1h' });

    // Return the token as a response

    res.json({ token });
  } else {
    // Return an error response
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Run the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
