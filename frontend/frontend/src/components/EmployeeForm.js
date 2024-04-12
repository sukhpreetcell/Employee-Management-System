import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    employeeId: '',
    salary: '',
    department: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/employee', employeeData);
      alert('Employee data submitted successfully!');
      setEmployeeData({
        firstName: '',
        lastName: '',
        employeeId: '',
        salary: '',
        department: '',
        email: '',
      });
    } catch (error) {
      console.error('Error submitting employee data:', error);
      alert('An error occurred while submitting employee data. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={employeeData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={employeeData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="employeeId">Employee ID:</label>
        <input
          type="text"
          id="employeeId"
          name="employeeId"
          value={employeeData.employeeId}
          onChange={handleChange}
          required
        />

        <label htmlFor="salary">Salary:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={employeeData.salary}
          onChange={handleChange}
          required
        />

        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={employeeData.department}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={employeeData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;