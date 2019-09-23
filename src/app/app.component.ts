import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {storage} from  '../data/personajes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PrograWebFrontEnd';

  public data:any = [];
  public text:String = '';

  ngOnInit():void {
    this.data = storage;
    console.log(this.data);
  }

  addElement(text: String) {
    this.data.push( {
      Personaje: text
    });
  }
  
}
