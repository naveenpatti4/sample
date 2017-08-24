import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Output() dColor = new EventEmitter<String>();
test = ''
bcolor(event){
  this.test = event.target.id;
  this.dColor.emit(this.test);
}

  constructor() { }

  ngOnInit() {
  }

}
