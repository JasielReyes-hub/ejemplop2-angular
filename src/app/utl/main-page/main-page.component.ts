import { Component } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/alumnos-utl';
import { UtlService } from '../services/utl.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  /* alumnosUtl:AlumnosUtl [] = [
    {
    nombre: 'Mario',
    edad: 22
    },
    {
    nombre: 'Jasiel',
    edad: 21
    },
    {
    nombre: 'Danna',
    edad: 22
    },
    {
    nombre: 'Diego',
    edad: 21
    }
  ]
*/
  regAlum: AlumnosUtl = {
    nombre: '',
    edad: 0
  } 

  constructor(){

    
  }

  /* agregarAlumnoNuevo (argumento:AlumnosUtl){ */
  /*   this.alumnosUtl.push(argumento);
  }
 */
  



}
