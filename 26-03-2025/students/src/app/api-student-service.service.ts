import { Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class ApiStudentServiceService {
  title = 'students';
  students:any[]=[]
  constructor(){
    this.students=[
    { id: 1, name: "Sai", section: "IT" },
    { id: 2, name: "Dhruva", section: "ECE" },
    { id: 3, name: "Rohit", section: "EEE" },
  ]}
  getStudents(){
    return this.students;
  }
  addStudent(id:any,name:any,section:any){
    this.students.push({ id:id,name:name,section:section})
  }
  deleteStudent(id:any){
    this.students= this.students.filter(student=>student.id!=id)
  }
  
  updateStudent(updatedStudent:any){
    let idx = this.students.findIndex(student=> student.id===updatedStudent.id)
    this.students[idx].name=updatedStudent.name
    this.students[idx].section=updatedStudent.section
  } 
}