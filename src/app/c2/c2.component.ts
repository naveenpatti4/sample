import { taskRem } from './../taskrem.service';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  
  constructor(private task_rem: taskRem) { }
  ary3 = this.task_rem.ary;
  // taskCompleted(elem){
  //   elem.style.textDecoration = "line-through";
  // }
  ngOnInit() {
  }

}
