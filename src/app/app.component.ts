import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {storage} from  '../data/personajes';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PrograWebFrontEnd';

  public data:any = [];
  public text2:String =  '';
  public text3: String = '';
  public text4: String = '';
  public idEliminar: String = '';
  public idActualizar: Number = 0;

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }
  ngOnInit():void {
    //this.data = storage;
    //console.log(this.data);
  }

  addElement(text1: String, text2: String, text3: String, picture: String ) {
    if(text1 == null || text2 == null || text3 == null || picture == null) 
    {
      alert('Error debe de llenar los campos');
    }
    else
    {
      this.data.push( {
        personaje: text1,
        franquicia: text2,
        imagen: picture,
        descripcion: text3, 
        video: ''
      });
    }
    
  }

  definirElemento(id:String)
  {
    for(var i = 0; i < this.data.length; i++){
      if(this.data[i].personaje === id)
      {
        console.log(i);
        this.idActualizar= i;

      }
    }
  }


  deleteElement(idEliminar: String) {
    if(confirm("Esta seguro de eliminar a "+idEliminar)) {
      for(var i = 0; i < this.data.length; i++) {
        if(this.data[i].personaje === idEliminar) {
           this.data.splice(i, 1);
        }
    }
    }
    
  }

  updateElement(text1: String, text2: String, text3: String, text4: String) {
    
    if(text1 == '' || text2 == '' || text3 == '' || text4 == '') 
    {
      alert('Error debe de llenar los campos');
    }
    else
    {
      for(var i = 0; i < this.data.length; i++) {
        if(this.data[i].personaje === text1) {
           this.data[i].personaje = text1;
           this.data[i].franquicia = text2;
           this.data[i].imagen = text3;
           this.data[i].descripcion = text4;
        }
    }
    
  }

  console.log(this.data);
  }


  prueba(text1: String)
  {
    console.log(text1);
  }

  posts = []
  
}
