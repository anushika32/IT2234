const express = require('express');
const app = express();
const port = 3001;
//array of student JSON details
let students = [
    {regno:'2020ict32',name:'anushika',gender:'female',age:'25',course:'ICT'},
    {regno:'2020ict125',name:'wenura',gender:'male',age:'25',course:'ICT'},
    {regno:'2020ict78',name:'mekala',gender:'female',age:'24',course:'ICT'},
    {regno:'2020ict56',name:'shanaka',gender:'male',age:'23',course:'ICT'},
    {regno:'2020ict06',name:'hasala',gender:'male',age:'23',course:'ICT'},
];


app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu/:id',(req,res)=>{
    const id = req.params.id
    //console.log(id)
    const result=students.find(student=>student.regno==id);
    //check student is available or not , if not return an error message
    if(result){
    res.send(result);
        
    } else {
        res.status(404).send("student not found");
    }

});

//filter students by gender
app.get('/stu/gender/:gen',(req,res)=>{
    const gender=req.params.gen;
    const result=students.filter(student => student.gender==gender);
    res.send(result);
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});