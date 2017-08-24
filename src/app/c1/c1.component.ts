import { taskRem } from './../taskrem.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  taskData = "";
 
  constructor(private task_rem: taskRem) { }
  ngOnInit() {
  }
      addTask(r) {
        this.task_rem.ary.push(this.taskData);
        console.log(this.task_rem.ary);
      }

}
