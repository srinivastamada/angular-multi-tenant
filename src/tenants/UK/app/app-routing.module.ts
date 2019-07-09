import { ShoesComponent } from './components/shoes/shoes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenComponent } from './components/men/men.component';

const routes: Routes = [
{
  path: 'men',
  component: MenComponent
},
{
  path: 'shoes',
  component: ShoesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
