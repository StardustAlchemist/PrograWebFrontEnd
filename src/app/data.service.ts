import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Personaje } from './modelos/personaje';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedPersonaje : Personaje;

  constructor(private httpClient:HttpClient) {
    console.log('service is working!');
    this.selectedPersonaje = new Personaje();
   }

   getData(){
     return this.httpClient.get('http://localhost:3000/api/v1/smash');
   }

   getOneData(personaje: Personaje){
     //return this.httpClient.get('http://localhost:3000/api/v1/smash' + `/${personaje._id}`);
   }

   addPersonaje(personaje: Personaje){
      console.log(personaje);
      return this.httpClient.post('http://localhost:3000/api/v1/smash', personaje);
   }

   editPersonaje(id:String ,personaje: Personaje){
     return this.httpClient.put('http://localhost:3000/api/v1/smash' + `/${id}`, personaje);
   }

   deletePersonaje(id: String){
     console.log('eliminar personaje');
     return this.httpClient.delete('http://localhost:3000/api/v1/smash' + `/${id}`);
   }
}
