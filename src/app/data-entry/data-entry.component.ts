import { Component,Output,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  studNo: number;
  studFname: string;
  studLname: string;
  studProgram: string;
  studYear: number;
  studentRecord;
  resetFlag=false;
  constructor() { 
  }

   getStudentRecord():object{
   this.studentRecord={
     studNo:this.studNo,
     studFirstName: this.studFname,
     studLasName: this.studLname,
     studProgam: this.studProgram,
     studYear:this.studYear

   };

    this.studNo=null;
    this.studFname=null;
    this.studLname=null;
    this.studProgram=null;
    this.studYear=null;
    return this.studentRecord;
  }
  
  ngOnInit() {
  }
 
}
