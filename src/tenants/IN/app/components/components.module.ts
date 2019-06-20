import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';


@NgModule({
  declarations: [MenComponent, KidsComponent],
  exports:[],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
