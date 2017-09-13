import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: `./student-form.component.html`,
  styles: [],
})
export class StudentFormComponent implements OnInit {

  studentObj = new Student(1, 'Anji Reddy', 'veera.alamuri@gmail.com', 9000887145);

  constructor() { 
   console.log("starting..");
  }

  submitted = false;
  data: string;

  onSubmit(data){
    this.submitted = true;
    this.data = JSON.stringify(data, null, 2);
    console.log(this.data);
  }

  ngOnInit() {
  }

}
