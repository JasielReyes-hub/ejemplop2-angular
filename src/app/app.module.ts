import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtlModule } from './utl/utl.module';
import { LoginComponent } from './usuarios/login/login.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UtlModule,
    MatFormFieldModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}


//import { MatFormFieldModule} from '@angular/material/form-field';
//import { MatInputModule} from '@angular/material/input';