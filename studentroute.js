// Imagine this file as a school receptionist who helps people find information about students!

// First, we need some special tools to help us build our student information system
const express = require('express');

// This creates a special helper (called a router) that knows how to guide people to the right information
// Think of it like a friendly school guide who knows where everything is!
const router = express.Router();

// This gets our special helper that knows all about the students
// It's like having access to the school's big book of student records
const studentService = require('./studentservice');

// 1. GET ALL STUDENTS ROUTE
// When someone wants to see ALL students (like viewing the whole school yearbook)
router.get('/', (req, res) => {
    // Ask our helper to get the list of all students
    const students = studentService.getStudents();

    // Check if we have any students
    if (students && students.length > 0) {
        // If we found students, show them to the person who asked
        // It's like sharing the yearbook with them!
        res.status(200).json(students);
    } else {
        // If no students found, send an appropriate message
        res.status(404).json({ message: 'No students found in the database' });
    }
});

// 2. SEARCH STUDENTS BY NAME ROUTE
// When someone wants to find students by searching their name
// Like using the index in the yearbook to find someone
router.get('/search', (req, res) => {
    // Get the name they're looking for
    const query = req.query.name;
    if (!query) {
        return res.status(400).json({ message: 'Please provide a name to search' });
    }
    // Get all students so we can search through them
    const students = studentService.getStudents();
    // Find students whose names match what we're looking for
    const searchResults = students.filter(student => 
        student.name.toLowerCase().includes(query.toLowerCase())
    );
    if (searchResults.length > 0) {
        res.status(200).json(searchResults);
    } else {
        res.status(404).json({ message: `No students found with name containing '${query}'` });
    }
});

// 3. FILTER STUDENTS BY AGE ROUTE
// When someone wants to find all students of a certain age
// Like finding all the 10-year-olds in the school
router.get('/filter', (req, res) => {
    // Check which type of filter they want to use
    if (req.query.age) {
        const age = parseInt(req.query.age);
        if (isNaN(age)) {
            return res.status(400).json({ message: 'Please provide a valid age number' });
        }
        const students = studentService.getStudents();
        const filteredStudents = students.filter(student => parseInt(student.age) === age);
        if (filteredStudents.length > 0) {
            res.status(200).json(filteredStudents);
        } else {
            res.status(404).json({ message: `No students found with age ${age}` });
        }
    }
    // 4. FILTER STUDENTS BY COURSE ROUTE
    // When someone wants to find all students in a specific class
    // Like finding everyone who takes art class
    else if (req.query.course) {
        const course = req.query.course;
        if (!course) {
            return res.status(400).json({ message: 'Please provide a course name' });
        }
        const students = studentService.getStudents();
        const filteredStudents = students.filter(student => 
            student.course.toLowerCase() === course.toLowerCase()
        );
        if (filteredStudents.length > 0) {
            res.status(200).json(filteredStudents);
        } else {
            res.status(404).json({ message: `No students found in course '${course}'` });
        }
    }
    // 6. FILTER STUDENTS BY GENDER ROUTE
    // When someone wants to find all students of a specific gender
    else if (req.query.gender) {
        const gender = req.query.gender;
        if (!gender || !['m', 'f'].includes(gender.toLowerCase())) {
            return res.status(400).json({ message: 'Please provide a valid gender (m/f)' });
        }
        const students = studentService.getStudents();
        const filteredStudents = students.filter(student => 
            student.gender.toLowerCase() === gender.toLowerCase()
        );
        if (filteredStudents.length > 0) {
            res.status(200).json(filteredStudents);
        } else {
            res.status(404).json({ message: `No students found with gender '${gender}'` });
        }
    } else {
        // If they didn't specify what to filter by
        res.status(400).send('Please specify what you want to filter by (age, course, or gender)');
    }
});

// Make our router available to other parts of the program
// It's like sharing our school guide with others who need help!
// 5. GET ONE STUDENT BY ID ROUTE
// When someone wants to find just one student using their special ID number
// It's like looking up one specific page in the yearbook
router.get('/:id', (req, res) => {
    // Get the ID number from the web address
    const id = req.params.id;
    // Ask our helper to find this specific student
    const student = studentService.getStudentById(id);

    if (student) {
        // If we found the student, show their information
        // Like opening the yearbook to exactly the right page!
        res.status(200).json(student);
    } else {
        // If we couldn't find that student, send a proper error response
        // Like saying "That page isn't in our yearbook!"
        res.status(404).json({ message: `Student with ID ${id} not found` });
    }
});

module.exports = router;
