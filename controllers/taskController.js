const { Task } = require('../models');

// Create a new task
exports.createTask = async (req, res) => {
    try {
      const { title, description, dueDate } = req.body;
  
      // Validate input
      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }
  
      // Create task
      const newTask = await Task.create({
        title,
        description,
        dueDate
      });
  
      // Respond with the newly created task
      res.status(201).json(newTask);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'An error occurred while creating the task' });
    }
  };

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.findAll();
  
      // Respond with the list of tasks
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ error: 'An error occurred while fetching tasks' });
    }
  };

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  // Logic to get a task by ID
};

// Update a task
exports.updateTask = async (req, res) => {
  // Logic to update a task
};

// Delete a task
exports.deleteTask = async (req, res) => {
  // Logic to delete a task
};
