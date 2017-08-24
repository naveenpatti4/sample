import { taskRem } from './taskrem.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [taskRem]
})
export class AppComponent {
ary2 = [];

addTask(e){
  this.ary2.push(e);
}
constructor(private task_rem: taskRem) { }

  ngOnInit() {
    
  }

}
