// 

import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const App = () => {
  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
};

export default App;