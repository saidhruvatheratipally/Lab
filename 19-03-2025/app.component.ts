import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student';
  students=[
    {id:1,name:"SAI",branch:"IT"},
    {id:2,name:"PUNITH",branch:"CSE"},
    {id:3,name:"SATHVIK",branch:"AIML"},
    {id:4,name:"DHRUVA",branch:"CS"},
    {id:5,name:"RISHI",branch:"DS"},
    {id:6,name:"ROHIT",branch:"EEE"}
  ]
  selectedstudent:any;
  deleteStudent(id:any){
    this.students=this.students.filter(student=>student.id!=id)
  }
  addStudent(id:any,name:any,branch:any){
    this.students.push({id:id.value,name:name.value,branch:branch.value})
  }
  // editStudent(id:any,name:any,branch:any){
  //   this.students[id]={id:id.value,name:name.value,branch:branch.value};
  // }
  updateStudent(id:any,name:any,branch:any){
    const index=this.students.findIndex(student=>student.id===id.value);
    this.students[index]=this.selectedstudent;
  }
}
