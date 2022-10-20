import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule} from '@angular/forms';
import { AlumnoseComponent } from './alumnose/alumnose.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UtlService } from './services/utl.service';


@NgModule({
  declarations: [
    MainPageComponent,
    AlumnoseComponent,
    AgregarComponent
  ],

  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  providers: [
    UtlService
  ]

})
export class UtlModule { }
