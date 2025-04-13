// This is our list of students - think of it like a digital class roster
// Each student is like a card with their information on it
let students = [
    // Each {} contains one student's information:
    // regno: their unique registration number (like their student ID)
    // name: their name
    // gender: 'm' for male, 'f' for female
    // age: how old they are
    // course: what they're studying (ICT = Information and Communication Technology)
    {regno:'2020ict32',name:'anushika',gender:'f',age:'25',course:'ICT'},
    {regno:'2020ict125',name:'wenura',gender:'m',age:'25',course:'ICT'},
    {regno:'2020ict78',name:'mekala',gender:'f',age:'24',course:'ENS'},
    {regno:'2020ict56',name:'shanaka',gender:'m',age:'23',course:'AMC'},
    {regno:'2020ict06',name:'hasala',gender:'m',age:'23',course:'ICT'},
];

// This line makes our student list available to other files
// It's like sharing our class roster with other teachers
module.exports=students;