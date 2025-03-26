import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiStudentServiceService } from './api-student-service.service';
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'students';
  students:any
  selectedStudent:any
  constructor(private studentService:ApiStudentServiceService){}
  fetchStudents(){
    this.students=this.studentService.students
  }
  ngOnInIt(){
    this.fetchStudents()
  }
  deleteStudent(id:any){
    this.studentService.deleteStudent(id);
    this.fetchStudents();
  }
  addStudent(id:any,name:any,branch:any){
    this.studentService.addStudent(id.value,name.value,branch.value);
    this.fetchStudents();
  }
  editStudent(student:any){
    this.selectedStudent={...student};
  }
  updateStudent(){
    this.studentService.updateStudent(this.selectedStudent)
    this.fetchStudents();
    this.selectedStudent=""
  }
}
