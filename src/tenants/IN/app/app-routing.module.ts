import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './components/men/men.component';
import { KidsComponent } from './components/kids/kids.component';

const routes: Routes = [
{
  path: 'men',
  component: MenComponent
},
{
  path: 'kids',
  component: KidsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
