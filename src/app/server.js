    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors')

    const app = express();
    const PORT = 3008;
    
    // Middleware
    app.use(cors());
    app.use(express.json());
    
    // MongoDB Connection
    mongoose.connect('mongodb://localhost:27017/employeeDetails', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });
    
    // Employee Schema & Model
    const employeeSchema = new mongoose.Schema({
      fname: String,
      lname: String,
      email: String,
      number: Number,
      age:Number
    });
    
    const Employee = mongoose.model('user', employeeSchema);
    
    // Routes
    // Get all employees
    app.get('/employeeDetails', async (req, res) => {
        const employees = await Employee.find();
        res.json(employees);   
      });
      
      app.post('/employeeDetails', async (req, res) => {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json(newEmployee);  
      });
      
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
     