import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [LogoComponent, FooterComponent],
  exports: [LogoComponent, FooterComponent ],
  imports: [CommonModule]
})
export class SharedComponentsModule {}
