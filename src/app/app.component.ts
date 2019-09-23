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
  public text1:String = '';
  public text2:String =  '';
  public text3: String = '';
  public text4: String = '';
  public idEliminar: String = '';

  ngOnInit():void {
    this.data = storage;
    console.log(this.data);
  }

  addElement(text1: String, text2: String, text3: String ) {
    this.data.push( {
      personaje: text1,
      franquicia: text2,
      imagen: 'No hay imagen',
      descripcion: text3, 
      video: ''
    });
  }


  deleteElement(idEliminar: String) {
    for(var i = 0; i < this.data.length; i++) {
      if(this.data[i].personaje === idEliminar) {
         this.data.splice(i, 1);
      }
  }
  }

  updateElement(text1: String, text2: String, text3: String, text4: String) {
    for(var i = 0; i < this.data.length; i++) {
      if(this.data[i].personaje === text1) {
         this.data[i].personaje = text2;
         this.data[i].franquicia = text3;
         this.data[i].descripcion = text4;
      }
  }
  }
  
}
