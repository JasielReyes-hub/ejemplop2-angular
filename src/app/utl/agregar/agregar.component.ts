import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../services/utl.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }

  @Input() alumnosUtl: AlumnosUtl[] = [];
  @Input() regAlum: AlumnosUtl = {
    nombre: '',
    edad: 0
  }


  //@Output() OnNuevoAlumno: EventEmitter<AlumnosUtl> = new EventEmitter();



  constructor(private utlservice:UtlService){

  }

  agregar(): void{
    console.log(this.regAlum);
    // this.alumnosUtl.push(this.regAlum);
    //this.OnNuevoAlumno.emit(this.regAlum);

    this.utlservice.agregarAlumnoNuevo(this.regAlum);


    this.regAlum = {
      nombre: "",
      edad: 0 
    }

    

  }
}