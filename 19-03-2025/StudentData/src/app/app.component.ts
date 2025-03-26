import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'students';
  students = [
    { id: 1, name: "abc", section: "IT" },
    { id: 2, name: "xyz", section: "ECE" },
    { id: 3, name: "karthik", section: "EEE" },
  ]
  selectedStudent:any;
  addStudent(id:any,name:any,section:any){
    this.students.push({ id:id.value,name:name.value,section:section.value})
  }
  deleteStudent(id:any){
    this.students= this.students.filter(student=>student.id!=id)
  }
  editStudent(student:any){
    this.selectedStudent={...student}
  }
  update(sstudent:any){
    let idx = this.students.findIndex(student=> student.id===sstudent.id)
    this.students[idx].name=sstudent.name
    this.students[idx].section=sstudent.section
  } 
}