var fs = require('fs');
const express=require("express");
const { json } = require('express');
const app=express()

app.use(express.json());
let studentArray=[];
app.listen(3000);

app.get('/getStudents',(req,res)=>
{
    res.json(studentArray);
    fs.readFile("Users.json",function(err,data)
    {
        const users=JSON.parse(data);
        console.log(users);
    })




})

app.post('/addDetails',(req,res)=>
{
    const{studentFirstName,collegeName,location}=req.body;
    console.log(studentFirstName);
    console.log(collegeName);
    console.log(location);
    res.json({msg:"added"});


    const users=require("./Users.json");
    let student={
        StudentFirstName:studentFirstName,
        CollegeName:collegeName,
        Location:location,
    }
    //adding new data to user object
    users.push(student);

    //writing to a file
    fs.writeFile("Users.json",JSON.stringify(users),err=>
    
    {
        if(err) throw err;
        console.log("Done writing");
    })    



})
 
