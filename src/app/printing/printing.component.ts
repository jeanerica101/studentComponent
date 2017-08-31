import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {
@Input()printing=false;
@Input()studentCollection: Array<object>;
  constructor() { }

  ngOnInit() {
  }

}
