import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProteinWheyComponent } from './protein-whey/protein-whey.component';
import { FruitWheyComponent } from './fruit-whey/fruit-whey.component';
import { MainComponent } from './main/main.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:  'main', component:  MainComponent},
  {path:  'protein-whey', component:  ProteinWheyComponent},
  {path:  'fresh-whey', component: FruitWheyComponent},
  {path:  'constructor', component: ConstructorComponent},
  {path:  'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
