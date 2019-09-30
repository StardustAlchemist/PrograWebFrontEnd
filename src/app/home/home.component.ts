import { Component, OnInit } from '@angular/core';
import {storage} from  '../../data/personajes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public data:any = [];
  
  constructor() { }

  ngOnInit() {
    this.data = storage;
  }

  public metodox(){
    console.log('Que locas');
  }
}
