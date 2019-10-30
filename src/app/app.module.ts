import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route} from '@angular/router';
import { AppComponent } from './app.component';
import { CrearPersonajeComponent } from './crear-personaje/crear-personaje.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import {HttpClientModule} from '@angular/common/http';
const routes: Route[] = [
  {path: '', component: AppComponent},
  {path: 'CrearPersonaje', component: CrearPersonajeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonajeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
