import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string;
  value:number;
  entervalue:number;
  constructor() {

   }

   clickEvent(){
     if(this.value%2==0)
     {
       this.entervalue=(this.value*this.value)-1;
       this.msg="The value at Entered index is "+this.entervalue;
     }
     else
     {
       this.entervalue=(this.value*this.value)+1;
       this.msg="The value at Entered index is  "+this.entervalue;
     }   
     return this.msg;
  }
}
