const express = require('express');
const router = express.Router();
const Employee = require('../Models/Employee');

// POST route to create a new employee
router.post('http://localhost:5000/employee', async (req, res) => {
  try {
    const { firstName, lastName, employeeId, salary, department, email } = req.body;

    // Create a new employee document
    const newEmployee = new Employee({
      firstName,
      lastName,
      employeeId,
      salary,
      department,
      email,
    });

    // Save the new employee to the database
    await newEmployee.save();

    // Return the new employee data
    res.status(201).json(newEmployee);
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Handle validation errors
      res.status(400).json({ error: error.message });
    } else {
      // Handle other errors
      console.error('Error creating employee:', error);
      res.status(500).json({ error: 'Failed to create employee.' });
    }
  }
});

// GET route to retrieve all employees
router.get('/employee', async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json(employee);
  } catch (error) {
    console.error('Error getting employees:', error);
    res.status(500).json({ error: 'Failed to get employees.' });
  }
});

module.exports = router;