//define 10 students JSON 
 //store it in an array
 //find thw female students
 //find the students who are following IT course
 //find the max and average GPA among the students




let students = [
    { regno: '2021/ict/32', name: 'Anushika', age: 25, gender: 'Female', course: 'IT', gpa: 3.8 },
    { regno: '2021/ict/33', name: 'Nuwani', age: 23, gender: 'Female', course: 'IT', gpa: 3.6 },
    { regno: '2021/ict/35', name: 'Wenura', age: 25, gender: 'Male', course: 'IT', gpa: 3.9 },
    { regno: '2021/ict/40', name: 'Kasun', age: 22, gender: 'Male', course: 'CS', gpa: 3.5 },
    { regno: '2021/ict/41', name: 'Dilini', age: 24, gender: 'Female', course: 'IT', gpa: 3.7 },
    { regno: '2021/ict/45', name: 'Ravindu', age: 26, gender: 'Male', course: 'CS', gpa: 3.2 },
    { regno: '2021/ict/50', name: 'Ishani', age: 23, gender: 'Female', course: 'IT', gpa: 3.9 },
    { regno: '2021/ict/55', name: 'Sameera', age: 22, gender: 'Male', course: 'SE', gpa: 3.1 },
    { regno: '2021/ict/60', name: 'Tharushi', age: 24, gender: 'Female', course: 'IT', gpa: 4.0 },
    { regno: '2021/ict/65', name: 'Chathura', age: 23, gender: 'Male', course: 'IT', gpa: 3.4 }
];

// Finding female students
let femaleStudents = students.filter(student => student.gender === 'Female');
console.log("Female Students:", femaleStudents);

// Finding students following IT course
let itStudents = students.filter(student => student.course === 'IT');
console.log("IT Students:", itStudents);

// Finding max GPA
let maxGPA = Math.max(...students.map(student => student.gpa));
console.log("Max GPA:", maxGPA);

// Finding average GPA
let totalGPA = students.reduce((sum, student) => sum + student.gpa, 0);
let avgGPA = totalGPA / students.length;
console.log("Average GPA:", avgGPA.toFixed(2));
