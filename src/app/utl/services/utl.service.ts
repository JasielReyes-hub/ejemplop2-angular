import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/alumnos-utl';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private alumnosUtl:AlumnosUtl [] = [
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

  get alumnos():AlumnosUtl[]{

    return [...this.alumnosUtl]
  }







  constructor() { 
    
  }


  agregarAlumnoNuevo (argumento:AlumnosUtl){ 
     this.alumnosUtl.push(argumento);
  }
 


  muestra(){
    console.log('nombre');
  }
}
