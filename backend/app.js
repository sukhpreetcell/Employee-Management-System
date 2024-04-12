const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use('/api', employeeRoutes);

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Employee', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectToDatabase();