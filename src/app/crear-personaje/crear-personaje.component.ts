import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-crear-personaje',
  templateUrl: './crear-personaje.component.html',
  styleUrls: ['./crear-personaje.component.css']
})
export class CrearPersonajeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('Child1') home: HomeComponent;

  addElement(name: String, franchise: String, picture: String, description: String){
    this.home.metodox();
  }  

}
