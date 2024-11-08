const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static('public')); // Serve static files from the 'public' directory

// Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
