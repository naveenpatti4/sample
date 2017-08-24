import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule}from '@angular/forms'
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { TaskComponent } from './c2/task/task.component';
import { RemainderComponent } from './c2/remainder/remainder.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    C1Component,
    C2Component,
    TaskComponent,
    RemainderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
