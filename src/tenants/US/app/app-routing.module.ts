import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'women',
    component: WomenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
