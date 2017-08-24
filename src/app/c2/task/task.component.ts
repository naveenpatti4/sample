import { taskRem } from './../../taskrem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private task:taskRem) { }
  ary2 = this.task.ary;
  taskCompleted(elem){
    elem.style.textDecoration = "line-through";
  }
  ngOnInit() {
  }

}
