import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values = [];
  constructor()
  {
    this.values.push({value:""});
  }
  removevalue(i){
    this.values.splice(i,1);
  }

  addvalue(){
    this.values.push({value: ""});
  }
  onsubmit()
  {
    var i:any;
    i=1;
    for( i in this.values)
    {
      console.log(this.values[i]);
    }
  }
}
