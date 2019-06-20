import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [ContactComponent],
  exports:[],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
