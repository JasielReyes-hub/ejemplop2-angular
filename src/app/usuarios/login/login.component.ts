import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { primeraLetraMayuscula } from './Validators/primeraLetraMayuscula';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private formBuilder:FormBuilder) { }
  //form:FormGroup;
  form = new FormGroup({
  nombre: new FormControl('', [Validators.minLength(2), Validators.required]),
  password: new FormControl('',[Validators.required]),
  });

  ngOnInit(): void {
    // this.form=this.formBuilder.group({
    //   nombre:['',{
    //     validators:[Validators.required, Validators.minLength(3),
    //     primeraLetraMayuscula()]
    //   }],
    //   password:['',{
    //     validators:[Validators.required]
    //   }]
    // })

  }
  guardarUsuario(){
    console.log("Registro guardaddo");
  }
  obtenerErrorCampos(){
    var nom=this.form.get("nombre");
    var pass=this.form.get("password");
    if(nom?.hasError("required")){
      return "El campo nombre es requerido"
    }

    if(nom?.hasError("minlength")){
      return "La longitud es de 3"
    }

    if(nom?.hasError("primeraLetraMayuscula")){
      return nom.getError("primeraLetraMayuscula").mensaje;
    }

    if(pass?.hasError("required")){
      return "El campo pass es requerido"
    }

    

  }

}