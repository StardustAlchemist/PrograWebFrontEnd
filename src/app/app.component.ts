import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {storage} from  '../data/personajes';
import {character} from '../data/character';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PrograWebFrontEnd';
  _personaje : character;

  public data:any = [];
  public text2:String =  '';
  public text3: String = '';
  public text4: String = '';
  public idEliminar: String = '';
  public idActualizar: Number = 0;
  public idOriginal: String;

  constructor(private dataService: DataService) {
    this._personaje = new character();
   
  }
  ngOnInit():void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    });
    //this.data = storage;
    //console.log(this.data);
  }

  addElement(text1: String, text2: String, text3: String, picture: String ) {
    
    this._personaje.nombre = text1;
    this._personaje.franquicia = text2; 
    this._personaje.descripcion = text3;
    this._personaje.imagen = picture;
    

    console.log(this._personaje);
    
    if(text1 == null || text2 == null || text3 == null || picture == null) 
    {
      alert('Error debe de llenar los campos');
    }
    else {
      console.log('entro');
      this.dataService.addPersonaje(this._personaje).subscribe(res =>{
        console.log(res);
      });

      window.location.reload();
    }
  }

  definirElemento(id1: String, id:String)
  {
    for(var i = 0; i < this.data.length; i++){
      if(this.data[i].nombre === id)
      {
        console.log(i);
        this.idActualizar= i;
        this.idOriginal = id1;
      }
    }
  }


  deleteElement(idEliminar: String) {
    console.log('el id es ' +  idEliminar);
    if(confirm("Esta seguro de eliminar a "+idEliminar)) {
     
      this.dataService.deletePersonaje(idEliminar).subscribe(res => {
        console.log(res);
      });
      
      window.location.reload();


    }
    
  }

  updateElement(text1: String, text2: String, text3: String, text4: String) {
    
    if(text1 == '' || text2 == '' || text3 == '' || text4 == '') 
    {
      alert('Error debe de llenar los campos');
    }
    else
    {
      this._personaje.nombre = text1;
      this._personaje.franquicia = text2;
      this._personaje.imagen = text3;
      this._personaje.descripcion = text4;

      this.dataService.editPersonaje(this.idOriginal, this._personaje).subscribe(res => {
        console.log('Updated');
      });


     /* for(var i = 0; i < this.data.length; i++) {
        if(this.data[i].personaje === text1) {
           this.data[i].personaje = text1;
           this.data[i].franquicia = text2;
           this.data[i].imagen = text3;
           this.data[i].descripcion = text4;
        }
      } */
    
  }

  }
  
}
