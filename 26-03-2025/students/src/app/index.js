const express=require("express");
const mongoose=require("mongoose");
var app=express();



mongoose.connect("mongodb+srv://saidhruvatheratipally:11032005@earnedge.qlapf.mongodb.net/Application")
.then(()=>{console.log("Database Connected")})
.catch((err)=>console.log(err))


let employees=[
    {"id":"1","name":"Sai Dhruva","salary":"50000"},
    {"id":"2","name":"Rohit","salary":"30000"},
    {"id":"3","name":"Rohan","salary":"70000"},
    {"id":"4","name":"Sathvik","salary":"90000"},
    {"id":"5","name":"Venu Gopal","salary":"10000"},
];
////////////////////////////////////////////////////////////////////////////////

app.get("/employees",(req,res)=>{
    if(employees){
        res.status(200).json(employees);
    }else{
        res.status(404).json({
            "message":"No data found"
        });
    }
});
////////////////////////////////////////////////////////////////////////////////

app.get("/employees/:id",(req,res)=>{
    const id=req.params.id;
    employees.find(e=>{
        if(e.id==id){
            res.status(200).json(e);
        }else{
            res.status(404).json({
                "message":"Data not found"
            });
        }
    });
});
////////////////////////////////////////////////////////////////////////////////

app.get("/employees/greater/:salary",(req,res)=>{
    const sal=req.params.salary;
    let emps=[];
    employees.forEach(e=>{
        if(e.salary>=sal){
            emps.push(e);
        }
    })
    if(emps){
        res.status(200).json(emps);
    }else{
        res.status(404).json({
            "message":"Data not found"
        })
    }
})
////////////////////////////////////////////////////////////////////////////////

app.get("/employees/:name",(req,res)=>{
    const name=req.params.name;
    let emp=employees.find(e=>e.name==name);
    if(emp){
        res.status(200).json(emp);
    }else{
        res.status(404).json({
            "message":"Data not found"
        })
    }
})
////////////////////////////////////////////////////////////////////////////////

app.delete("/employees-delete/:id",(req,res)=>{
    const id=req.params.id;
    const emp=employees.filter(e=>e.id==id);
    if(emp){
        employees=employees.filter(e=>e.id!=id);
        res.status(200).json(employees);
    }else{
        res.status(404).json({
            "message":"Data not found"
        })
    }
})
//////////////////////////////////////////////////////////////////////////////////

app.use(express.json())

app.post("/employeesinsert",(req,res)=>{
    let newEmp=req.body;
    let del=employees.find(e=>e.id===newEmp.id);
    if(del){
        res.status(404).json({
            "message":"Employee already exists"
        })
    }else{
        employees.push(newEmp);
        res.status(200).json(employees);
    }
    
})
///////////////////////////////////////////////////////////////////////////////////

app.put("/employeesupdate/:id",(req,res)=>{
    const id=req.params.id;
    ind=employees.findIndex(emp=>emp.id===id);
    if(ind!==-1){
        employees[ind].name=req.body.name;
        employees[ind].salary=req.body.salary;   
        res.status(200).json({
            "message":"Updated Succesfully",
            "Updated data":employees[ind]
        })
    }else{
        res.status(404).json({
            "message":"Data not found"
        })
    }
})
///////////////////////////////////////////////////////////////////////////////////

app.listen(2000,()=>{
    console.log("Server Started");
});