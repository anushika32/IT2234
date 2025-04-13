// This is like getting a special tool box (Express) that helps us build websites easily
// Just like how you need special tools to build a treehouse!
const express = require('express');

// This creates our website application using Express
// Think of it like creating a new blank canvas where we'll build our website
const app = express();

// This is the door number where our website will be available
// Like how your house has an address, our website needs a number where people can find it
const port = 3000;

// This gets our list of students from another file
// It's like getting a class roster from the teacher's desk
const studentsRoute = require('./student/studentroute');

// This line tells our website to use our student routes
// It's like saying "we'll use the class roster to guide our website's content"
app.use(express.json())
app.use('/students', studentsRoute);

// This line makes our website available on the internet
// It's like putting our website on the street so people can see it
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})



