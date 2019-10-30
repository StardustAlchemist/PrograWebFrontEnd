import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {
    console.log('service is working!');
   }

   getData(){
     return this.httpClient.get('http://localhost:3000/api/v1/smash');
   }
}
