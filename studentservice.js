// This line gets our list of students from another file (like getting a class roster from a folder)
const students = require('./studentsdb')

// This is a helper function that gives us all the students
// It's like asking "Can I see everyone in the class?"
function getStudents() {
    // Simply returns the whole list of students
    return students;
}

// This is a helper function that finds one specific student using their ID number
// It's like looking for one student in the class using their roll number
function getStudentById(id) {
    // The 'find' function looks through all students one by one
    // It's like going through the class roster until we find the student we want
    return students.find(student => student.regno == id); 
}

// This makes our helper functions available to other parts of our program
// It's like saying "here are the tools you can use to work with student information"
module.exports = { getStudents, getStudentById };