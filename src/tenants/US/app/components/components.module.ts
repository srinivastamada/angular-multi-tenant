import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

@NgModule({
  declarations: [ContactComponent, MenComponent, WomenComponent],
  exports: [ContactComponent, MenComponent, WomenComponent],
  imports: [CommonModule]
})
export class ComponentsModule {}
