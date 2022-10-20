import { Component, Input, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-alumnose',
  templateUrl: './alumnose.component.html',
  styleUrls: ['./alumnose.component.css']
})
export class AlumnoseComponent {
  
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  
  //@Input() alumnosUtl: AlumnosUtl[] = [];


  get alumnos(){

    return this.alumnosutl.alumnos;

  }
  constructor(private alumnosutl:UtlService){



  }
  

}

