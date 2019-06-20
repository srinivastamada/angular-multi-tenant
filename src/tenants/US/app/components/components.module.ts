import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';


@NgModule({
  declarations: [ContactComponent, MenComponent, WomenComponent],
  exports:[ContactComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
