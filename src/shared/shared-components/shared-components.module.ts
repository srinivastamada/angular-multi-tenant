import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [LogoComponent],
  exports: [LogoComponent],
  imports: [CommonModule]
})
export class SharedComponentsModule {}
