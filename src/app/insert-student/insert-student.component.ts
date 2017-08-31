import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.css']
})
export class InsertStudentComponent implements OnInit {
@Output() InsertStudent=new EventEmitter();
@Output() PrintingEnabled=new EventEmitter();
flag;
@Input() messages:string;
resetFlag;

  constructor() { }

  ngOnInit() {
  }

  AddOption(){
    this.flag='add';
    this.InsertStudent.emit({mode: this.flag});

  }
  
  ListOption(){
    this.flag='print';
    this.PrintingEnabled.emit({mode: this.flag});

  }

}
