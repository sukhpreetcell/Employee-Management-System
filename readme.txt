Employee Management System 

This project involves creating a full-stack web application for managing employee data. The application has a frontend built with React and a backend built with Node.js, Express, and MongoDB.

Frontend

The frontend of the Employee Management System consists of the following components:

1. EmployeeForm
This component allows users to input employee details such as first name, last name, employee ID, salary, department, and email.
The form data is submitted using Axios, a popular HTTP client library, to send a POST request to the backend API.

2. EmployeeList
This component fetches and displays a list of employees from the backend API.
It uses the useState and useEffect hooks provided by React to manage the state and fetch the employee data.
The useEffect hook is used to fetch the list of employees when the component is mounted.
The employee data is stored in the employees state variable.
If there is an error while fetching the employees, it is logged to the console.
The component renders a table with a row for each employee, displaying their first name, last name, employee ID, salary, department, and email.

3. Proxy Configuration
The frontend package.json file includes a "proxy" field set to "http://localhost:5000".
This configuration allows the frontend to send API requests to the backend server without specifying the full URL.


Backend

The backend of the Employee Management System consists of the following components:
1. Config
The config.js file in the config folder sets up a connection to a MongoDB database using Mongoose, a popular Object Data Modeling (ODM) library for MongoDB.

2. Model
The employee.js file in the model folder defines a Mongoose schema and model for the Employee entity.

3. Routes
The employeeRoutes.js file in the routes folder defines an Express router for handling employee-related requests.
The router includes a POST route for creating a new employee and a GET route for retrieving all employees.
The router uses the Employee model to interact with the MongoDB database and return data to the client.

4. Index.js
The index.js file is the main file that sets up an Express server and connects it to the MongoDB database using Mongoose.

The server includes middleware for parsing JSON request bodies and registers the employee-related routes.
The server is started by calling the connectToDatabase() function, which connects to the database and starts the server listening on a specified port.

Running the Project
To run the Employee Management System project, you need to run both the frontend and backend components separately:

Frontend:
Navigate to the frontend folder.
Run the command npm start to start the React development server.

Backend:
Navigate to the backend folder.
Run the command node index.js to start the Express server.
The frontend will be available at http://localhost:3000, and the backend API will be available at http://localhost:5000.

Functionality

The Employee Management System website provides the following functionality:

Employee Form:

Users can input employee details such as first name, last name, employee ID, salary, department, and email.
The form data is submitted using Axios to send a POST request to the backend API.
Saving Employee Data:

The backend API receives the employee data and saves it to a MongoDB database using the Mongoose library.
Employee List:

The website displays a list of employees fetched from the backend API.
The list is rendered using the EmployeeList component, which fetches the employee data using the useEffect hook.
The employee data is displayed in a table format, showing the employee's first name, last name, employee ID, salary, department, and email.
By combining these functionalities, the Employee Management System website allows users to input employee details, save them to a database, and view a list of employees stored in the database.