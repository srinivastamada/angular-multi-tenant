import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './men/men.component';
import { ShoesComponent } from './shoes/shoes.component';


@NgModule({
  declarations: [MenComponent, ShoesComponent],
  exports:[],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
