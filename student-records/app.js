const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student.routes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', studentRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/studentdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Could not connect to MongoDB', error));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
