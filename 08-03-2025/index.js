var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/student")
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("MongoDB connection error:", err));

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    city: { type: String }
});

const Student = mongoose.model('Student', studentSchema);
app.get('/getAll',(req,res)=>{
    Student.find()
    .then((student)=>{
        res.status(201).json({message:"data",student});
    })
    .catch((err) => {
        res.status(400).json({ message: 'Error creating student', error: err });
    });
});

app.post('/postStudent')

app.listen(2000, () => {
    console.log("Server running on port 2000");
});
