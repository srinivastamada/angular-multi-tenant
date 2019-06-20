import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [LogoComponent, FooterComponent, HeaderComponent],
  exports: [LogoComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule]
})
export class SharedComponentsModule {}
