import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CardComponent } from './components/card/card.component';



const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'card', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
